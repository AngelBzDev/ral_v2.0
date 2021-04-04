<?php
  require './config/database.php';

  $query = "SELECT * FROM laboratorios";
  $result = mysqli_query($conn, $query);

  if(!$result){
    die("Consulta fallida");
  }

  $json = [];

  while($row = mysqli_fetch_array($result)){
    $json[] = [
      'id' => $row['id'],
      'nombre_lab' => $row['nombre_lab'],
      'estatus' => $row['estatus']
    ];
  }
  $jsonString = json_encode($json);
  echo $jsonString;
?>