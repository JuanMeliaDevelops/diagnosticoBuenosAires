<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["telefono"]) && isset($_POST["message"])){
  
  if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $message = $_POST["message"];
    $contenido = "Formulario de contacto de Diagnostico Buenos Aires,"."\r\n". $name." esta interesado/a."."\r\n" ."Email: ". $email ."\r\n". "Telefono: " . $telefono ."\r\n" . "Asunto: "."\r\n". $message;
    $destino = "info@diagnostico.com.ar";
    $asunto = "Diagnostico,  ".$name." ";
    $header = "From: ".$email."\r\n"."reply: ".$email."\r\n"."X-Mailer: PHP/". phpVersion();
    $mail = mail($destino,$asunto,$contenido,$header);
    
  


    if ($mail) {
      echo 1;
    }

    else {
      echo 0 ;
    }
  }

}
