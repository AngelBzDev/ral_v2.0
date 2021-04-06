<?php
  require './config/database.php';

  $idProfe = $_POST['idProfe'];
  $idAula = $_POST['idAula'];
  $grupoSel = $_POST['grupoSel'];
  $fecha = $_POST['fecha'];
  $horas = $_POST['horas'];
  $esAula = $_POST['esAula'];

  if($esAula === 'true'){
    $query = "INSERT INTO aulas_ocupadas(fecha, horas, id_aula, id_profesor, id_grupo) VALUES ('$fecha', '$horas', '$idAula', '$idProfe', $grupoSel)";
    $insert = mysqli_query($conn, $query);
    $query2 = "UPDATE aulas SET estatus = 'o' WHERE id = '$idAula'";
    $update = mysqli_query($conn, $query2);
    echo "Solicitud de aula exitosa, que tenga buena clase";
  }
  else{
    $query = "INSERT INTO lab_ocupados(fecha, horas, id_lab, id_profesor, id_grupo) VALUES ('$fecha', '$horas', '$idAula', '$idProfe', $grupoSel)";
    $insert = mysqli_query($conn, $query);
    $query2 = "UPDATE laboratorios SET estatus = 'o' WHERE id = '$idAula'";
    $update = mysqli_query($conn, $query2);
    echo "Solicitud de laboratorio exitosa, que tenga buena clase";
  }

?>