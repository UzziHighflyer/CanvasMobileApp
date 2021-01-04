// window.onload = function() {

//   document.ontouchmove = function(e){ e.preventDefault(); 
//   }
//   // Platno
//   var canvas    = document.getElementById("main");  
//   var canvastop = canvas.offsetTop;
//   // Header
//   var header        = $('#header');
//   var headerHeight  = header.height();
//   var innerHeight   = window.innerHeight;
//   console.log(headerHeight);

//   var context = canvas.getContext("2d");

//   var lastx;
//   var lasty;

//   var text = document.getElementById('centertext');

//   // $('#main').height(450);
//   // $("#main").width("90%");
  
//   console.log(canvas.offsetHeight);
//   console.log($('#main').height());


//   window.addEventListener("resize",() => {
//   	// $('#main').height(450);
//    //  $("#main").width("90%");
//     // canvas.width  = window.innerWidth;
//     console.log(canvas.offsetHeight);  
//   })
//   console.log($(canvas).height());

//   // Boja 
//   var color 	= document.getElementById("colorpicker");
//   color.addEventListener("input",function(){
//   	context.strokeStyle = color.value;
//   },false)

//   var lineCap   = document.getElementById("slider");

//   var lineCapWidth  = lineCap.value;
//   context.lineWidth = lineCapWidth;

//   lineCap.oninput = function(){
//   	lineCapWidth = this.value;
//   	context.lineWidth = lineCapWidth;
//   }

//   console.log(lineCapWidth);

//   var sendBtn  = document.querySelector("#submit");

//   sendBtn.addEventListener("click",function(){
//   	const dataURI = canvas.toDataURL();
//   	document.getElementById("link").value = dataURI;
//   });

  
//   context.lineCap = 'round';
//   context.lineJoin = 'round';

//   function dot(x,y) {
//     context.beginPath();
//     context.fillStyle = "#000000";
//     context.arc(x,y,1,0,Math.PI*2,true);
//     context.fill();
//     context.stroke();
//     context.closePath();
//   }

//   function line(fromx,fromy, tox,toy) {
//     context.beginPath();
//     context.moveTo(fromx, fromy);
//     context.lineTo(tox, toy);
//     context.stroke();
//     context.closePath();
//   }

//   canvas.ontouchstart = function(event){                   
//     event.preventDefault();                 
    
//     lastx = event.touches[0].clientX;
//     lasty = event.touches[0].clientY - headerHeight;
//     console.log("X je" + event.touches[0].clientX);
//     console.log("Y je" + lasty);
//     // lasty = event.touches[0].clientY

//     dot(lastx,lasty);
//   }

//   canvas.ontouchmove = function(event){                   
//     event.preventDefault();                 

//     var newx = event.touches[0].clientX;
//     var newy = event.touches[0].clientY - headerHeight;
//     // var newy = event.touches[0].clientY;
//     console.log("X je" + event.touches[0].clientX);
//     console.log("Y je" + newy);

//     line(lastx,lasty, newx,newy);
    
//     lastx = newx;
//     lasty = newy;
//   }


// }


window.onload = function() {

    document.ontouchmove = function(e){ e.preventDefault(); }

    var canvas  = document.getElementById('main');
    var canvastop = canvas.offsetTop;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    console.log(canvas.width);
    console.log(canvas.offsetWidth);

    var context = canvas.getContext("2d");

    var lastx;
    var lasty;

    var lineCap   = document.getElementById("slider");

    var color   = document.getElementById("colorpicker");
    color.addEventListener("input",function(){
        context.strokeStyle = color.value;
        // $("#slider").css('border-color',color.value);
        $("body").append('<style>#slider::-webkit-slider-thumb{background: ' + color.value + '}</style>');
    },false)

   
    var rubber  = document.getElementById("rubber");
    rubber.addEventListener("touchstart",function(){
        context.strokeStyle = "#ffffff"
        $("body").append('<style>#slider::-webkit-slider-thumb{background: white}</style>');
    },false)

    
    color.addEventListener("touchstart",function(){
        context.strokeStyle = color.value;
        $("body").append('<style>#slider::-webkit-slider-thumb{background: ' + color.value + '}</style>');
    },false);
    
    
    var lineCapWidth  = lineCap.value;
    context.lineWidth = lineCapWidth;

    lineCap.oninput = function(){
        lineCapWidth = this.value;
        context.lineWidth = lineCapWidth;
        $("body").append('<style>#slider::-webkit-slider-thumb{height: ' + lineCapWidth + 'px;width:'+ lineCapWidth +'px}</style>');
    }

    var marginLeft = parseInt($(canvas).css("margin-left"));
    var marginRight = parseInt($(canvas).css("margin-right"));

    $("#submit").css("margin-right",marginRight +"px");

    window.addEventListener("resize",() => {
        $("#submit").css("margin-right",marginRight +"px");

    })

    var sendBtn  = document.querySelector("#submit");

    sendBtn.addEventListener("click",function(){
        const dataURI = canvas.toDataURL();
        document.getElementById("link").value = dataURI;
    });

    context.lineCap = 'round';
    context.lineJoin = 'round';

    function clear() {
        context.fillStyle = "#ffffff";
        context.rect(0, 0, 300, 300);
        context.fill();
    }

    function dot(x,y) {
        context.beginPath();
        context.fillStyle = "#000000";
        context.arc(x,y,1,0,Math.PI*2,true);
        context.fill();
        context.stroke();
        context.closePath();
    }

    function line(fromx,fromy, tox,toy) {
        context.beginPath();
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.stroke();
        context.closePath();
    }

    canvas.ontouchstart = function(event){                   
        event.preventDefault();                 
    
        lastx = event.touches[0].clientX - marginLeft;
        lasty = event.touches[0].clientY - canvastop;

        dot(lastx,lasty);
    }

    canvas.ontouchmove = function(event){                   
        event.preventDefault();                 

        var newx = event.touches[0].clientX - marginLeft;
        var newy = event.touches[0].clientY - canvastop;
       
        line(lastx,lasty, newx,newy);
        
        lastx = newx;
        lasty = newy;
    }

}