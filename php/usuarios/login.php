<?php
   require '../config/database.php';
   $correo = strtolower($_POST['correo']);
   // $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);
   $pass = $_POST['pass'];

   $query = "SELECT * FROM profesor WHERE correo = '$correo'";
   $result = mysqli_query($conn, $query);

   $respuesta;

   if($result->num_rows){
      //verificar contraseña
      $usuario = mysqli_fetch_assoc($result);
      $auth = password_verify($pass, $usuario['pass']);

      if($auth){
         session_start();

         $_SESSION['usuario'] = $usuario['correo'];
         $_SESSION['login'] = true;

         echo $respuesta = 1;
         // var_dump($_SESSION);
      }
      else{
         echo $respuesta = 2;
      }
   }
   else{
      echo $respuesta = 3;
   }
?>