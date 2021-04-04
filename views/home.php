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
   <meta name="description" content="RAL es una aplicacion web para ayudar a los profesores a apartar sus aulas">
   <link rel="shortcut icon" type="image/png" href="../img/favicon.png">
   <title>RAL | Home</title>
   <!--<link rel="preconnect" href="https://fonts.gstatic.com">-->
   <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"> -->
   <!-- <link rel="stylesheet" href="./css/normalize.css"> -->
   <!-- <link rel="stylesheet" href="./css/app.css"> -->
   <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" preload>
   <link rel="stylesheet" href="../css/estilos.css" preload>
</head>
<body class="font-sans">
   <div id="banner" class="bg-gradient-to-r from-blue-900 to-blue-300 relative w-full h-auto bg-center bg-cover bg-gradient-to-r from-blue-900 to-blue-300">
      <header class="relative w-full arriba">
         <nav class="container flex items-center justify-between px-4 py-2 mx-auto md:px-20">
            <img src="../img/favicon.png" alt="favicon RAL" class="w-8 md:w-10">
            <a class="block text-base text-white md:text-xl" href="../php/cerrar_sesion.php">Cerrar Sesión</a>
         </nav>
      </header>
      <div class="container items-center justify-between px-6 py-6 mx-auto md:px-20 md:py-10 md:flex">
         <div class="relative entrar">
            <h3 class="mb-2 text-4xl md:text-5xl font-regular text-white md:mb-5 md:text-6xl"> <?php echo $_SESSION['sexo'] === 'f' ? 'Bienvenida Profesora': 'Bienvenido Profesor'; ?></h3>
            <h3 class="mb-8 text-4xl md:text-5xl font-regular text-white md:text-6xl"><?php echo $_SESSION['nombres']?></h3>
            <a href="#eleccion" class="w-auto md:w-2/4 p-2.5 font-bold text-blue-900 uppercase transition duration-500 ease-in-out transform bg-white rounded-lg shadow hover:-translate-y-1 hover:scale-110 md:mb-5 md:mt-8 my-8 block text-center">Hacer Elección</a>
         </div>
         <div class="w-full md:w-2/6 entrada2">
            <img src="../img/img3.png" alt="Imagen de un profesor" class="w-full mx-auto md:w-full imagen">
         </div>
      </div>
   </div>
   <main id="container mx-auto">
      <div class="p-3 md:p-7 mx-3 md:mx-10 arriba my-5" id="eleccion">
         <h4 class="text-2xl md:text-3xl text-center">¿Que desea elegir?</h4>
         <div class="grid w-full grid-cols-2 mx-auto gap-x-6 md:w-7/12 entrada2 text-center my-5">
            <a href="#aulas" class="p-2 text-sm md:text-lg font-bold text-white uppercase transition duration-500 ease-in-out transform bg-blue-900 border-b border-blue-900 rounded-lg cursor-pointer mb-7 hover:-translate-y-1 hover:scale-110" id="btn-aula">Aula</a>
            <a href="#laboratorios" class="p-2 text-sm md:text-lg font-bold text-white uppercase transition duration-500 ease-in-out transform bg-blue-900 border-b border-blue-900 rounded-lg cursor-pointer mb-7 hover:-translate-y-1 hover:scale-110" id="btn-lab">Laboratorio</a>
         </div>
         <div class="hidden entrar" id="aulas">
            <p class="text-2xl md:text-3xl text-center mb-5">Elija su Aula</p>
            <ul id="lista-aulas"></ul>
         </div>
         <div class="hidden entrar" id="laboratorios">
            <p class="text-2xl md:text-3xl text-center mb-5">Elija su Laboratorio</p>
            <ul id="lista-lab"></ul>
         </div>
         <div class="form-eleccion mt-10">
            <form class="w-full mx-auto mt-6 text-left md:w-7/12 entrar">
               <div class="block md:grid grid-cols-2 gap-x-4">
                  <div class="mb-2">
                     <label class="font-normal" for="grupo">Elija un grupo:</label>
                     <select name="grupo" id="grupos" class="mt-1 w-full block py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-iblue-900 focus:border-blue-900">
                     </select>
                  </div>
                  <div class="mb-2">
                     <label class="font-normal" for="fecha">Fecha de hoy:</label>
                     <input type="date" name="fecha" id="fecha" class="mt-1 w-full block py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-iblue-900 focus:border-blue-900">
                  </div>
               </div>
               <div class="block md:grid grid-cols-2 gap-x-4">
                  <div class="mb-2">
                     <label class="font-normal" for="hora-inicio">Hora de inicio</label>
                     <input type="time" name="hora-inicio" id="hora-inicio" class="mt-1 w-full block py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-iblue-900 focus:border-blue-900">
                  </div>
                  <div class="mb-2">
                     <label class="font-normal" for="hora-fin">Hora de fin</label>
                     <input type="time" name="hora-fin" id="hora-fin" class="mt-1 w-full block py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-iblue-900 focus:border-blue-900" min="12:00">
                  </div>
               </div>
               <div class="justify-end flex"><input type="submit" value="Solicitar aula" class="p-2 text-sm md:text-lg font-bold text-white uppercase transition duration-500 ease-in-out transform bg-blue-900 border-b border-blue-900 rounded-lg cursor-pointer my-5 hover:-translate-y-1 hover:scale-110 md:w-2/6 w-full" id="solicitar"></div>
            </form>
         </div>
      </div>
   </main>
   <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous" defer></script>
   <script src="../js/home.js" defer></script>
</body>
</html>