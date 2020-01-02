<?php
	/*$mensaje = "Nombre: ".$_POST["nombre"] . "\n Email: " . $_POST["email"] . "\n Asunto: " . $_POST["asunto"] . "\n Mensaje: " . $_POST["mensaje"] ;*/
	$mensaje = "Nombre: ";
	$mensaje = htmlspecialchars($mensaje);
	$mensaje = stripslashes($mensaje);

	$to = "victoria.flores@gmail.com";
	$subject = "Tienes un mensaje desde Agenda2020";
	$header = "From:victoria.flores@gmail.com \r\n";

	$retval = mail ($to, $subject, $mensaje, $header);
	
	if ($retval == true){
		echo "Mensaje enviado con éxito";
	}else{
		echo "Mensaje no enviado";
	}
?>