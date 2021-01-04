<?php 
	require "config.php";
	require "classes/autoload.php";

	$conn   = Konekcija::get();
	$query  = $conn->query("SELECT * FROM photos ORDER BY date_posted ASC");
	$photos = $query->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html>
<head>
	<title>Sve slike</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0">
	<script>
  		function fullscreen(element) {
  			var elm1 = element;
			var timeout;
			var lastTap = 0;
			elm1.addEventListener('touchend', function(event) {
			    var currentTime = new Date().getTime();
			    var tapLength = currentTime - lastTap;
			    clearTimeout(timeout);
			    if (tapLength < 500 && tapLength > 0) {
			       	document.getElementById("img01").src = elm1.src;
  					document.getElementById("modal01").style.display = "block";
			        event.preventDefault();
			    } else {
			        timeout = setTimeout(function() {
			            elm2.innerHTML = 'Single Tap (timeout)';
			            clearTimeout(timeout);
			        }, 500);
			    }
			    lastTap = currentTime;
			});
  		}
  	</script>
</head>
<body>
<?php 	
	if(!empty($photos)){
		for ($i=0; $i < count($photos); $i++) { 
			?>
				<img src="<?=$photos[$i]->photo_link?>" style="border:1px solid black;margin:2px;float:left;width:30%;" ontouchstart="fullscreen(this)">
			<?php
		}
	}
?>

	<div id="modal01" class="w3-modal" ontouchstart="this.style.display='none'">
	  	<span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
	  	<div class="w3-modal-content w3-animate-zoom">
	    	<img id="img01" style="width:300px;height:400px">
  		</div>
  	</div>
</body>
</html>

	