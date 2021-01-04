<?php  
	session_start();
	require "config.php";
	require "classes/autoload.php";
	sleep(2);

	if(isset($_POST['submit'])){
		if(isset($_POST['link']) && !empty($_POST['link'])){
			$link 				= $_POST['link'];
			$token 				= $_POST['token'];
			$conn 				= Konekcija::get();
			if($_SESSION['tokens'][$token]){
				$query  = $conn->query("INSERT INTO photos VALUES(0,'{$link}',NOW())");
				$_SESSION['tokens'][$token] = 0;
 				header("location:images.php");
			}else{
				header("location.images.php");
			}
		}
	}
?>