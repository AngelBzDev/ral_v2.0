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

   function mostrarMsjExito(mensaje){
      const msjErr = document.createElement('P');
      msjErr.id = 'msj-error';
      msjErr.textContent = mensaje;
      msjErr.classList.add('bg-green-500', 'text-white', 'p-3', 'my-5', 'text-center', 'font-bold', 'uppercase', 'rounded-lg');
      if(formLogin.classList.contains('hidden')){
         if(!document.getElementById('msj-error'))
         btnRegistrarse.before(msjErr);
      }
      else{
         if(!document.getElementById('msj-error'))
         btnLogin.before(msjErr);
      }
      setTimeout(() => {
         msjErr.remove();
      }, 4000);
   }
});

