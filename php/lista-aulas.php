<?php
    require './config/database.php';

    $query = "SELECT * FROM aulas";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die("Consulta fallida");
    }

    $json = [];
    while($row = mysqli_fetch_array($result)){
        $json[] = [
            'id' => $row['id'],
            'nombre_aula' => $row['nombre_aula'],
            'estatus' => $row['estatus']
        ];
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>