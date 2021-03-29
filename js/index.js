$(document).ready(function(){
   $('#form-registro').submit(function(e){
      e.preventDefault();
      const datos = {
         nombre: $('#nombre').val(),
         apellido: $('#apellido').val(),
         correo2: $('#correo2').val(),
         pass2: $('#pass2').val(),
         sexo: $('.sexo:checked').val()
      }
      $.post('./php/usuarios/registro.php', datos, function(respuesta){
         if(respuesta === 'efe'){
            mostrarError("El correo ya esta en uso");
            $('#correo2').val('');
            $('#correo2').removeClass('border-green-500');
            $('#correo2').addClass('border-red-500');
            iniciarApp();
         }else{
            mostrarMsjExito("Registro Exitoso, inicie sesión");
            $('#form-registro').trigger('reset');
            $('input').removeClass('border-green-500');
            $('input').removeClass('border-red-500');
            iniciarApp();
         }
      });
   });

   $('#form-login').submit(function(e){
      e.preventDefault();
      const datos = {
         correo: $('#correo').val(),
         pass: $('#pass').val()
      };

      $.post('./php/usuarios/login.php', datos, function(r){
         
         console.log(r);
         if(r === "1"){
            $(location).attr('href','./views/home.php');
         }
         if(r === "2"){
            // console.log("La contraseña es incorrecta");
            mostrarError("La contraseña es incorrecta");
            $('#pass').removeClass('border-green-500');
            $('#pass').addClass('border-red-500');
            iniciarApp();
         }
         if(r === "3"){
            mostrarError("El correo no esta registrado");
            // console.log("El correo no esta registrado");
            $('#correo').removeClass('border-green-500');
            $('#correo').addClass('border-red-500');
            iniciarApp();
         }
      });
   });
});

