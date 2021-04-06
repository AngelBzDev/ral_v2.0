let grupo = document.querySelector('#grupos');

$(document).ready(function(){

    verificarOcupados();

    mostrarAulas();
    mostrarLab();

    $("#btn-desoc").click(function(){
        $.ajax({
            url: '../php/desocupar.php',
            type: 'POST',
            success: function(r){
                window.location.reload();
            }
        });
    });

    $("#btn-aula").click(function(){
        if(!$('#labotarios').hasClass('hidden')){
            $('#laboratorios').addClass('hidden');
        }
        $('#aulas').removeClass('hidden');
        mostrarAulas();
    });

    $("#btn-lab").click(function(){
        if(!$('#aulas').hasClass('hidden')){
            $('#aulas').addClass('hidden');
        }
        $('#laboratorios').removeClass('hidden');
        mostrarLab();
    });

    $(document).on('click', '.aula', function(){
        let idAulaSelec = parseInt(this.firstElementChild.textContent);
        let form = document.querySelector('#form-solicitud');
        form.classList.remove('hidden');
        window.location.href = "#form-solicitud";
        //let inputAula = document.querySelector('#id-aula');
        document.querySelector('#idAula').textContent = idAulaSelec;
        let nombreElec = this.children[1].textContent;
        let parrafoNom = document.querySelector('#nombre-elec');
        parrafoNom.textContent = `Eligió el aula: ${nombreElec}`;
    });

    $(document).on('click', '.lab', function(){
        let idLabSelec = parseInt(this.firstElementChild.textContent);
        let form = document.querySelector('#form-solicitud');
        form.classList.remove('hidden');
        window.location.href = "#form-solicitud";
        //let inputAula = document.querySelector('#id-aula');
        document.querySelector('#idAula').textContent = idLabSelec;
        let nombreElec = this.children[1].textContent;
        let parrafoNom = document.querySelector('#nombre-elec');
        parrafoNom.textContent = `Eligió el laboratorio: ${nombreElec}`;
    });

    listarGrupos();
    bloquearFechas();
    deshabilitarBoton();
    //bloquearHoras();
    //bloquearHoraFin();
    validarSolicitud();

    $('#form-solicitud').submit(function(e){
        e.preventDefault();
        let grupoSel = grupo.value;
        let fecha = document.querySelector('#fecha').value;
        let horas = document.querySelector('#hora-inicio').value + " - " + document.querySelector('#hora-fin').value;
        let idAula = document.querySelector('#idAula').textContent;
        let idProfe = document.querySelector('#id-profe').textContent;
        let esAula = false;
        if(document.querySelector('#laboratorios').classList.contains('hidden')){
            esAula = true;
        }
        const datos = {
            idProfe,
            idAula,
            grupoSel,
            fecha,
            horas,
            esAula
        }
        $.post('../php/solicitar.php', datos, function(r){
            console.log(r);
            deshabilitarBoton();
            const msj = document.createElement('P');
            msj.textContent = r;
            msj.classList.add('bg-green-50', 'text-green-500', 'p-3', 'my-5', 'text-center', 'font-semibold', 'uppercase', 'rounded-lg', 'border', 'border-green-500');
            let p = document.querySelector('#nombre-elec');
            p.appendChild(msj);
            setTimeout(() => window.location.href = "../php/cerrar_sesion.php", 5000);
        });
    });
});

//Funcion para mostrar la lista de aulas
function mostrarAulas(){
    $.ajax({
        url: '../php/lista-aulas.php',
        type: 'GET',
        success: function(respuesta){
            let json = JSON.parse(respuesta);
            let template = '';
            json.forEach(aula => {
                template += `
                <li>
                    <button class=" w-full py-8 text-center text-xl md:text-2xl flex justify-around hover:bg-green-50 hover:border-green-500 items-center rounded-lg border-b border-gray-300 estatus aula">
                        <p class="hidden">${aula.id}</p>
                        <p class="flex-1 font-semibold">${aula.nombre_aula}</p>`;
                if(aula.estatus === 'o'){
                    //$('li a').prop('disabled', true);
                    template += `
                            <span class="font-semibold ocupado flex-1 x-2 block leading-5 rounded-lg text-red-500">Ocupado</span>
                        </button>
                    </li>`;
                }
                if(aula.estatus === 'd') {
                    template += `
                            <span class="font-semibold flex-1 x-2 block leading-5 rounded-lg text-green-500">Disponible</span>
                        </button>
                    </li>`;
                }
            });
            $('#lista-aulas').html(template);
            let btnOcupado = $('span.ocupado');
            const btns = [];
            for(let i = 0; i < btnOcupado.length; i++){
                btns[i] = btnOcupado[i].parentElement;
            }
            btns.forEach(i =>{
                i.disabled = true;
                i.classList.remove('hover:bg-green-50', 'hover:border-green-500');
                i.classList.add('cursor-not-allowed', 'hover:bg-red-50', 'hover:border-red-500');
            });
        }
    });
}

function mostrarLab(){
    $.ajax({
        url: '../php/lista-lab.php',
        type: 'GET',
        success: function(respuesta){
            let json = JSON.parse(respuesta);
            let template = '';
            json.forEach(lab => {
                template += `
                <li>
                    <button class="w-full py-8 text-center text-xl md:text-2xl flex justify-around hover:bg-green-50 hover:border-green-500 items-center rounded-lg border-b border-gray-300 estatus lab">
                        <p class="hidden">${lab.id}</p>
                        <p class="flex-1 font-semibold">${lab.nombre_lab}</p>`;
                if(lab.estatus === 'o'){
                    //$('li a').prop('disabled', true);
                    template += `
                        <span class="ocupado flex-1 x-2 block leading-5 rounded-lg text-red-500 font-semibold">Ocupado</span>`;
                    //console.log($('.ocupado')[0].parenElement);
                }
                if(lab.estatus === 'd') {
                    template += `
                        <span class="flex-1 x-2 block leading-5 rounded-lg text-green-500 font-semibold">Disponible</span>`;
                }
                template += `
                    </button>
                </li>`;
            });
            $('#lista-lab').html(template);
            let btnOcupado = $('span.ocupado');
            const btns = [];
            for(let i = 0; i < btnOcupado.length; i++){
                btns[i] = btnOcupado[i].parentElement;
            }
            btns.forEach(i =>{
                i.disabled = true;
                i.classList.remove('hover:bg-green-50', 'hover:border-green-500');
                i.classList.add('cursor-not-allowed', 'hover:bg-red-50', 'hover:border-red-500');
            });
        }
    });
}

function listarGrupos(){
    $.ajax({
        url: '../php/grupos.php',
        type: 'GET',
        success: function(r){
            let json = JSON.parse(r);
            let template = '<option value="" selected disabled>Seleccione un grupo</option>';
            json.forEach(grupo => {
                template += `<option value="${grupo.id}">${grupo.grupo}</option>`
            });
            $('#grupos').html(template);
        }
    });
}

function bloquearFechas(){
    let fecha = new Date();
    let dia = fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let mes2 = mes < 10 ? '0' + mes : mes;
    let year = fecha.getFullYear();

    let fechaCom = `${year}-${mes2}-${dia}`;
    const inpFecha = document.querySelector('#fecha');
    inpFecha.min = fechaCom;
    inpFecha.max = fechaCom;
    inpFecha.value = fechaCom;
}

let fecIn = '', fecF = '';

function bloquearHoras(){
    const hora = document.querySelector('#hora-inicio');
    hora.addEventListener('input', (e) => {
        const h = e.target.value;
        const hr = h.split(':');
        if(hr[0] < 7 || hr[0] > 21){
            hora.value = '';
            deshabilitarBoton();
        }
        else{
            hora.value = hr[0] + ':00';
            fecIn = hora.value;
            validarSolicitud();
        }
    });
}

function bloquearHoraFin(){
    const horaF = document.querySelector('#hora-fin');
    horaF.addEventListener('input', (e) => {
        const h = e.target.value;
        const hr = h.split(':');
        if(hr[0] < 7 || hr[0] > 21){
            horaF.value = '';
            deshabilitarBoton();
        }
        else{
            horaF.value = hr[0] + ':00';
            fecF = horaF.value;
            validarSolicitud();
        }
    });
}

function deshabilitarBoton(){
    const btn = document.querySelector('#solicitar');
    btn.disabled = true;
    btn.classList.add('cursor-not-allowed', 'opacity-50');
    btn.classList.remove('hover:-translate-y-1', 'hover:scale-110');
}

function habilitarBoton(){
    const btn = document.querySelector('#solicitar');
    btn.disabled = false;
    btn.classList.remove('cursor-not-allowed', 'opacity-50');
    btn.classList.add('hover:-translate-y-1', 'hover:scale-110');
}

function validarSolicitud(){
    bloquearHoras();
    bloquearHoraFin();
    let grupoSe = grupo.value;

    if(grupoSe !== ''){
        if(fecIn != '' && fecF != ''){
            let fI = fecIn.split(':');
            let fF = fecF.split(':');
            if(parseInt(fI[0]) < parseInt(fF[0])){
                habilitarBoton();
            }
            else{
                deshabilitarBoton();
            }
        }
        else{
            deshabilitarBoton();
        }
    }
}

function verificarOcupados(){
    $.post('../php/ocupados.php', {idP:idP.textContent}, function(r){
        let main = document.querySelector('#main');
        let aviso = document.querySelector('#aviso');
        if(r == '1'){
            main.classList.add('hidden');
            aviso.classList.remove('hidden');
        }
        else{
            main.classList.remove('hidden');
            aviso.classList.add('hidden');
        }
    });
}

