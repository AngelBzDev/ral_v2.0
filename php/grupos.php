<?php
  require './config/database.php';
  $query = "SELECT * FROM grupos";
  $resultado = mysqli_query($conn, $query);

  if(!$resultado){
    die("Consulta fallida");
  }

  $json = [];
  while($row = mysqli_fetch_array($resultado)){
    $json[] = [
      'id' => $row['id'],
      'grupo' => $row['grupo']
    ];
  }
  $jsonString = json_encode($json);
  echo $jsonString;
?>