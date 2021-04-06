<?php
  require './config/database.php';
  session_start();
  $idP = $_SESSION['idProfe'];
  $query = "SELECT * FROM aulas_ocupadas WHERE id_profesor = '$idP'";
  $resu = mysqli_query($conn, $query);
  $query2 = "SELECT * FROM lab_ocupados WHERE id_profesor = '$idP'";
  $resu2 = mysqli_query($conn, $query2);
  if($resu->num_rows || $resu2->num_rows){
    echo 1;
  }
  else{
    echo 2;
  }
?>