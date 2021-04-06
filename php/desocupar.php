<?php
  require './config/database.php';
  session_start();
  $idP = $_SESSION['idProfe'];
  //Consultas para saber si algun profe esta usando un aula
  $query = "SELECT * FROM aulas_ocupadas WHERE id_profesor = '$idP'";
  $resu = mysqli_query($conn, $query);
  $query2 = "SELECT * FROM lab_ocupados WHERE id_profesor = '$idP'";
  $resu2 = mysqli_query($conn, $query2);
  //Consultas de salones y lab
  
  $lab = mysqli_query($conn, "SELECT * FROM laboratorios");
  if($resu->num_rows){
    while($row = mysqli_fetch_array($resu)){
      $idAula = $row['id_aula'];
      $aulas = mysqli_query($conn, "UPDATE aulas SET estatus = 'd' WHERE id = '$idAula'");
    }
    $query3 = "DELETE FROM aulas_ocupadas WHERE id_profesor = '$idP'";
    $delete = mysqli_query($conn, $query3);
    echo "Aula desocupada";
  }

  if($resu2->num_rows){
    while($row = mysqli_fetch_array($resu2)){
      $idLab = $row['id_lab'];
      $aulas = mysqli_query($conn, "UPDATE laboratorios SET estatus = 'd' WHERE id = '$idLab'");
    }
    $query3 = "DELETE FROM lab_ocupados WHERE id_profesor = '$idP'";
    $delete = mysqli_query($conn, $query3);
    echo "Laboratorio desocupado";
  }
?>