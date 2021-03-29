<?php
   function conectarDB(): mysqli{
      $db = mysqli_connect('localhost', 'root', '', 'ral', 3307);
      if(!$db){
         echo "Error al conectar a la base de datos";
         exit;
      }
      return $db;
   }

   $conn = conectarDB();
?>