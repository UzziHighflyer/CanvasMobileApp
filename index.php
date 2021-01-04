<?php 
	session_start();
	$token = sha1(mt_rand()); 
	$_SESSION['tokens'][$token] = 1;

	
?>
<!DOCTYPE html> 
<html> 
<head> 
  	<meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0">
  	<link rel="stylesheet" type="text/css" href="style.css">
  	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
	<meta charset="utf-8">
	<title>Nacrtaj 2020</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  	<script src="canvas.js"></script>
</head> 
<body>
	
	<div>
		<div id="header">
			<h1>NACRTAJ 2020</h1>
			
			<label for="colorpicker">Boju</label>
			<input type="color" id="colorpicker" style="margin:10px 0 0 20px">
			
			<label for="slider">Debljina cetkice</label>
			<input type="range" id="slider" min="1" max="50" value="5"> 
			11
			<label for="rubber">Gumica</label>
			<input type="color" id="rubber">				
		</div>
		<canvas id="main"></canvas>
		<div id="footer">
			<form method="post" enctype="multipart/form-data" action="upload.php">
				<input type="hidden" name="link" id="link">
				<input type="hidden" name="token" value="<?php echo $token ?>">
				<input type="submit" name="submit" id="submit" value="Posalji" style="float:right">
			</form>
		</div>
	</div>
</body>
</html>