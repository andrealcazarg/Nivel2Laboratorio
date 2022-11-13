
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
    });

    function validarFormulario(evento){
        evento.preventDefault();
        //input id value
        var nombre = document.getElementById('nombre').value;
        //label
        var respuesta =document.getElementById('label_respuesta');
        //input id
        var input = document.getElementById('nombre');

        if(nombre.length == 0) {
            //error vacio
            input.style.backgroundImage = "url('images/error-icon.svg')";
            input.style.backgroundRepeat = 'no-repeat';
            input.style.backgroundPosition = 'right';
            respuesta.style.display = 'block';
            input.style.border = '3px solid red';
            return;
        }else{
            input.style.backgroundImage = "url('images/success-icon.svg')";
            input.style.backgroundRepeat = 'no-repeat';
            input.style.backgroundPosition = 'right';
            input
            respuesta.style.display = 'none';
            input.style.border = '3px solid green';
        }
        console.log(nombre);
        // var clave = document.getElementById('clave').value;
        // if (clave.length < 6) {
        //     alert('La clave no es válida');
        //     return;
        // }
    }
