<?php	
	function autoload($klasa){
		require_once("{$klasa}.php");
	}
	spl_autoload_register("autoload");