const expresiones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/
}

const campos = {nombre:false,apellido:false};

const formulario = document.querySelector(".login");
const inputs = document.querySelectorAll('.login input');

formulario.addEventListener("submit", Saludo);

function Saludo(e){
    e.preventDefault();
    const nombre=document.querySelector(".campo1").value
    const apellido= document.querySelector(".campo2").value
    if(campos.nombre && campos.apellido){
        formulario.reset();
        Swal.fire(
            `Ingresando a Colombia Traders :  ${nombre} ${apellido}`
        )
        setTimeout(function(){window.location.href="index.html";},2000);
    }else{
        formulario.querySelector('.mensaje').classList.add('mensaje-activo');
    }
}
const validarformulario = (e)=>{
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                formulario.querySelector('.formulario__nombre').classList.remove('formulario__nombre-incorrecto');
                formulario.querySelector('.formulario__nombre').classList.add('formulario__nombre-correcto');
                formulario.querySelector('.formulario-error1').classList.remove('mensaje-activo');
                campos['nombre'] = true;
            }else{
                formulario.querySelector('.formulario__nombre').classList.add('formulario__nombre-incorrecto');
                formulario.querySelector('.formulario__nombre').classList.remove('formulario__nombre-correcto');
                formulario.querySelector('.formulario-error1').classList.add('mensaje-activo');
                campos['nombre'] = false;
            }
        break;
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                formulario.querySelector('.formulario__apellido').classList.remove('formulario__apellido-incorrecto');
                formulario.querySelector('.formulario__apellido').classList.add('formulario__apellido-correcto');
                formulario.querySelector('.formulario-error2').classList.remove('mensaje-activo');
                campos['apellido'] = true;
            }else{
                formulario.querySelector('.formulario__apellido').classList.add('formulario__apellido-incorrecto');
                formulario.querySelector('.formulario__apellido').classList.remove('formulario__apellido-correcto');
                formulario.querySelector('.formulario-error2').classList.add('mensaje-activo');
                campos['true'] = false;
            }
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
});