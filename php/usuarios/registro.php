<?php
   require '../config/database.php';
   //Guardando los valores del formulario
   $nom = strtolower($_POST['nombre']);
   $apel = strtolower($_POST['apellido']);
   $nombre = ucwords($nom);
   $apellido = ucwords($apel);
   $correo = strtolower($_POST['correo2']);
   $pass = password_hash($_POST['pass2'], PASSWORD_DEFAULT);
   $sexo = $_POST['sexo'];
   // echo $pass;
   // $fecha = date("d m Y");

   $query1 = "SELECT * FROM profesor WHERE correo = '${correo}'";
   $resultado = mysqli_query($conn, $query1);
   if($resultado->num_rows){
      echo "efe";
   }
   else{
      $query2 = "INSERT INTO profesor (nombres, apellidos, correo, pass, sexo) VALUES ('$nombre', '$apellido', '$correo', '$pass', '$sexo')";
      $insert = mysqli_query($conn, $query2);
      echo "nice";
   }
?>