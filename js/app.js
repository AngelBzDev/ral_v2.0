//Variables
const formLogin = document.querySelector('#form-login');
const formRegistro = document.querySelector('#form-registro');

const titulo = document.querySelector('#titulo');
const titulo2 = document.querySelector('#titulo-2');

const iniciar = document.querySelector('#iniciar-sesion');
const registrarse = document.querySelector('#registrarse');

const btnLogin = document.querySelector('#btn-login');
const btnRegistrarse = document.querySelector('#btn-registrarse');

const correo = document.querySelector('#correo');
const pass = document.querySelector('#pass');

//Eventos
iniciarEventos();
function iniciarEventos(){
   document.addEventListener('DOMContentLoaded', iniciarApp)

   titulo2.addEventListener('click', () => {
      titulo2.classList.add('bg-blue-900', 'text-white');
      titulo.classList.remove('bg-blue-900', 'text-white');
      formRegistro.classList.remove('hidden');
      formLogin.classList.add('hidden');
   });

   titulo.addEventListener('click', () => {
      titulo.classList.add('bg-blue-900', 'text-white');
      titulo2.classList.remove('bg-blue-900', 'text-white');
      formLogin.classList.remove('hidden');
      formRegistro.classList.add('hidden');
   });

   //Eventos para el inicio de sesion
   correo.addEventListener('blur', validarFormulario);
   pass.addEventListener('blur', validarFormulario);
}

//Funciones

function iniciarApp(){
   btnLogin.disabled = true;
   btnLogin.classList.add('cursor-not-allowed', 'opacity-50');
   btnLogin.classList.remove('hover:-translate-y-1', 'hover:scale-110');

   btnRegistrarse.disabled = true;
   btnRegistrarse.classList.add('cursor-not-allowed', 'opacity-50');
   btnRegistrarse.classList.remove('hover:-translate-y-1', 'hover:scale-110');

}

function validarFormulario(e){
   if(e.target.value.length > 0){
      e.target.classList.add('border', 'border-green-500');
   }
   else{
      e.target.classList.remove('border-green-500')
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Todos los campos son obligatorios');
   }

   const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(e.target.type === 'email') {
      if(er.test(e.target.value)){
         console.log('valido');
      }
      else{
         mostrarError('El email no es valido');
         e.target.classList.remove('border-green-500');
      }
   }

   const erPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

   if(e.target.type === 'password'){
      if(erPass.test(e.target.value)){
         console.log('contraseña valida');
         console.log(e.target.value);
      }
      else{
         mostrarError('La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.');
         e.target.classList.remove('border-green-500');
      }
   }

   if(er.test(correo.value) && erPass.test(pass.value)){
      btnLogin.disabled = false;
      btnLogin.classList.remove('cursor-not-allowed', 'opacity-50');
      btnLogin.classList.add('hover:-translate-y-1', 'hover:scale-110');
   }
   else{
      btnLogin.disabled = true;
      btnLogin.classList.add('cursor-not-allowed', 'opacity-50');
      btnLogin.classList.remove('hover:-translate-y-1', 'hover:scale-110');
   }
}

//Funcion para mostrar el error
function mostrarError(mensaje){
   const msjErr = document.createElement('P');
   msjErr.id = 'msj-error';
   msjErr.textContent = mensaje;
   msjErr.classList.add('bg-red-500', 'text-white', 'p-3', 'my-5', 'text-center', 'font-bold', 'capitalize', 'rounded-lg');

   if(!document.getElementById('msj-error'))
      btnLogin.before(msjErr);

   setTimeout(() => {
      msjErr.remove();
   }, 4000);
}
