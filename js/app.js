//Variables
const formLogin = document.querySelector('#form-login');
const formRegistro = document.querySelector('#form-registro');

const titulo = document.querySelector('#titulo');
const titulo2 = document.querySelector('#titulo-2');

const iniciar = document.querySelector('#iniciar-sesion');
const registrarse = document.querySelector('#registrarse');

const btnLogin = document.querySelector('#btn-login');
const btnRegistrarse = document.querySelector('#btn-registrarse');

//Input para iniciar sesion
const correo = document.querySelector('#correo');
const pass = document.querySelector('#pass');

//Inputs para el registro
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo2 = document.querySelector('#correo2');
const pass2 = document.querySelector('#pass2');
const passConfirm = document.querySelector('#confirmpass');
const sexF = document.querySelector('#femenino');
const sexM = document.querySelector('#masculino');

let passGuardada = "";

const checkMostrar = document.querySelector('#mostrar');
const checkMostrar2 = document.querySelector('#mostrar2');
//Expresiones regulares
//Para el correo
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Para la contraseña
const erPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

//Para el nombre y apellidos
const erNombre = /^[a-z ,.'-]+$/i;//^[A-Za-zÁÉÍÓÚáéíóúñÑ]{3,30}/;

//Eventos
iniciarEventos();
function iniciarEventos(){
   document.addEventListener('DOMContentLoaded', iniciarApp)

   titulo2.addEventListener('click', mostrarRegistro);
   titulo.addEventListener('click', mostrarLogin);

   //Eventos para el inicio de sesion
   correo.addEventListener('blur', validarFormulario);
   pass.addEventListener('blur', validarFormulario);

   //Eventos para el registro
   nombre.addEventListener('blur', validarRegistro);
   apellido.addEventListener('blur', validarRegistro);
   correo2.addEventListener('blur', validarRegistro);
   pass2.addEventListener('blur', validarRegistro);
   passConfirm.addEventListener('blur', validarRegistro);
   sexF.addEventListener('click', validarRegistro);
   sexM.addEventListener('click', validarRegistro);

   checkMostrar.addEventListener('change', mostrarContrasena);
   checkMostrar2.addEventListener('change', mostrarContrasena);
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
      iniciarApp();
   }

   if(e.target.type === 'email') {
      if(er.test(e.target.value)){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('El correo no es valido');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border-red-500');
      }
   }

   if(e.target.id === 'pass'){
      if(erPass.test(e.target.value)){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border-red-500');
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
      iniciarApp();
   }
}

//Funcion para validar los campos del registro
function validarRegistro(e){
   if(e.target.value.length > 0){
      e.target.classList.add('border', 'border-green-500');
   }
   else{
      e.target.classList.remove('border-green-500')
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Todos los campos son obligatorios');
      iniciarApp();
   }

   if(e.target.id === 'nombre'){
      if(erNombre.test(e.target.value)){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('Nombre no valido');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border', 'border-red-500');
         iniciarApp();
      }
   }

   if(e.target.id === 'apellido'){
      if(erNombre.test(e.target.value)){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('Apellido no valido');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border', 'border-red-500');
         iniciarApp();
      }
   }

   if(e.target.type === 'email') {
      if(er.test(e.target.value)){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('El correo no es valido');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border-red-500');
      }
   }

   if(e.target.id === 'pass2'){
      if(erPass.test(e.target.value)){
         passGuardada = e.target.value;
      }
      else{
         mostrarError('La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border', 'border-red-500');
      }
   }

   if(e.target.id === 'confirmpass'){
      if(e.target.value === passGuardada){
         e.target.classList.add('border-green-500');
      }
      else{
         mostrarError('Las contraseñas no coinciden');
         e.target.classList.remove('border-green-500');
         e.target.classList.add('border', 'border-red-500');
      }
   }

   // if(e.target.type === 'radio'){
   //    if(sexF.checked || sexM.checked){
   //       console.log('Hola');
   //    }
   //    else{
   //       mostrarError
   //    }
   // }

   if(nombre !== '' && erNombre.test(nombre.value) && apellido !== '' && erNombre.test(apellido.value) && er.test(correo2.value) && erPass.test(pass2.value) &&  passConfirm.value === passGuardada){
      if(sexF.checked || sexM.checked){
         btnRegistrarse.disabled = false;
         btnRegistrarse.classList.remove('cursor-not-allowed', 'opacity-50');
         btnRegistrarse.classList.add('hover:-translate-y-1', 'hover:scale-110');
      }
   }
   else{
      btnRegistrarse.disabled = true;
      btnRegistrarse.classList.add('cursor-not-allowed', 'opacity-50');
      btnRegistrarse.classList.remove('hover:-translate-y-1', 'hover:scale-110');
      iniciarApp();
   }
}

//Funcion para mostrar el error
function mostrarError(mensaje){
   const msjErr = document.createElement('P');
   msjErr.id = 'msj-error';
   msjErr.textContent = mensaje;
   msjErr.classList.add('bg-red-50', 'text-red-500', 'p-3', 'my-5', 'text-center', 'font-semibold', 'uppercase', 'rounded-lg', 'border', 'border-red-500');

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

function mostrarRegistro(){
   titulo2.classList.add('bg-blue-900', 'text-white');
   titulo.classList.remove('bg-blue-900', 'text-white');
   formRegistro.classList.remove('hidden');
   formLogin.classList.add('hidden');
}

function mostrarLogin(){
   titulo.classList.add('bg-blue-900', 'text-white');
   titulo2.classList.remove('bg-blue-900', 'text-white');
   formLogin.classList.remove('hidden');
   formRegistro.classList.add('hidden');
}

function mostrarContrasena(){
   if(this.checked) {
      if(formRegistro.classList.contains('hidden'))
         pass.type = "text";
      else
         pass2.type = "text";
         passConfirm.type = "text";
   }
   else {
      if(formRegistro.classList.contains('hidden'))
         pass.type = "password";
      else
         pass2.type = "password";
         passConfirm.type = "password";
   }
}

function mostrarMsjExito(mensaje){
   const msjExito = document.createElement('P');
   msjExito.id = 'msj-exito';
   msjExito.textContent = mensaje;
   msjExito.classList.add('bg-green-50', 'text-green-500', 'p-3', 'my-5', 'text-center', 'font-semibold', 'uppercase', 'rounded-lg', 'border', 'border-green-500');
   if(formLogin.classList.contains('hidden')){
      if(!document.getElementById('msj-error'))
      btnRegistrarse.before(msjExito);
   }
   else{
      if(!document.getElementById('msj-exito'))
      btnLogin.before(msjExito);
   }
   setTimeout(() => {
      msjExito.remove();
   }, 5000);
}