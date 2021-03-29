<?php
   require '../php/funciones.php';

   $auth = verificarAutentificacion();
   if(!$auth){
      header('Location:../index.html');
   }
?>

<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>RAL | Home</title>
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="../css/normalize.css">
   <link rel="stylesheet" href="../css/app.css">
   <link rel="stylesheet" href="../css/estilos.css">
</head>
<body class="font-serif bg-gradient-to-r from-blue-900 to-blue-300">
   <div id="banner" class="relative w-full h-auto bg-center bg-cover bg-gradient-to-r from-blue-900 to-blue-300">
      <header class="relative w-full arriba">
         <nav class="container flex items-center justify-between px-4 py-2 mx-auto md:px-20">
            <img src="../img/logo.png" alt="Logo RAL" class="w-8 md:w-12">
            <a class="block text-base text-white md:text-xl" href="../php/cerrar_sesion.php">Cerrar Sesión</a>
         </nav>
      </header>
      <div class="container items-center justify-between px-6 py-6 mx-auto md:px-20 md:py-10 md:flex">
         <div class="relative entrar">
            <h3 class="mb-2 text-5xl font-bold text-white md:mb-5 md:text-6xl">Bienvenido Profesor</h3>
            <h3 class="mb-8 text-5xl font-bold text-white md:text-6xl">Angel</h3>
            <a href="#eleccion" class="w-auto md:w-2/4 p-2.5 font-bold text-blue-900 uppercase transition duration-500 ease-in-out transform bg-white rounded-lg shadow hover:-translate-y-1 hover:scale-110 md:mb-5 md:mt-8 my-8 block text-center">Hacer Elección</a>
         </div>
         <div class="w-full md:w-2/6 entrada2">
            <img src="../img/img3.png" alt="Imagen de un profesor" class="w-full mx-auto md:w-full imagen">
         </div>
      </div>
   </div>
   <main class="container p-4 mx-auto md:px-20 md:py-10">
      <div class="p-4 mx-2 bg-white rounded-lg shadow-sm md:mx-12 md:p-10" id="eleccion">
         <p class="my-4 text-2xl font-bold text-center text-blue-900 md:text-5xl">¿Que desea elegir?</p>
         <div class="grid-cols-2 my-12 md:grid">
            <div class="flex flex-col items-center justify-between mb-6 md:mb-0">
               <p class="my-2 text-2xl font-medium md:my-8">Aula</p>
               <a href="#" class="block w-full transition duration-500 ease-in-out transform bg-no-repeat bg-contain border rounded-lg shadow md:w-3/5 h-52 hover:-translate-y-1 hover:scale-110" style="background-image: url(../img/salon.jpg);">
               </a>
            </div>
            <div class="flex flex-col items-center justify-between">
               <p class="mt-5 mb-2 text-2xl font-medium md:my-8">Laboratorio</p>
               <a href="#" class="block w-full transition duration-500 ease-in-out transform bg-no-repeat bg-contain border rounded-lg shadow md:w-3/5 h-52 hover:-translate-y-1 hover:scale-110" style="background-image: url(../img/laboratorio.jpg);">
               </a>
            </div>
         </div>
      </div>
   </main>
   <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>