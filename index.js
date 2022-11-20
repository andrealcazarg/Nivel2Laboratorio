    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
    });


    function validarFormulario(evento) {
        evento.preventDefault();

        //Declaracion variables id input
        var nombre = document.getElementById('nombre');
        var email = document.getElementById('email');
        var clave = document.getElementById('clave');
        var confir_clave = document.getElementById('confir_clave');

        // for(var i = 0; i< respuesta.length; i++){
        //     if (nombre.length == 0 || email.length == 0){
        //         respuesta[i].style.display = 'block';
        //     }
        // }
        validarCamposVacios();

        // var clave = document.getElementById('clave').value;
        // if (clave.length < 8) {
        //     alert('La clave no es válida');
        //     return;
        // }
    }

/**
 * funcion utilizada para validar si el email es correcto con una expresion regular.
 * Se tienen en cuenta:
 * 1: Que empieze por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
 * 2: Esta seguido por el @
 * 3: Nombre dominio del correo (.com, .es) \w+([.-]?\w+)*(\.\w{2,10})+$
 * Por ejemplo:  andrea@gmail.com
 */
    function validarEmail() {
    var respuesta_email = document.getElementById('label_respuesta_email');
    var email = document.getElementById('email');
    var email_valido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email_valido.test(email)) {
        //error vacio
        email.style.backgroundImage = "url('images/error-icon.svg')";
        email.style.backgroundRepeat = 'no-repeat';
        email.style.backgroundPosition = 'right';
        email.style.border = '3px solid red';
       respuesta_email.style.display = 'block';
        return;
    } else {
        email.style.backgroundImage = "url('images/success-icon.svg')";
        email.style.backgroundRepeat = 'no-repeat';
        email.style.backgroundPosition = 'right';
        email.style.border = '3px solid green';
        respuesta_email.style.display = 'none';
    }
        // if (email_valido.test(email)) {
        //     alert('Email es valido.');
        //     return true;
        // } else {
        //     alert('Email es invalido.');
        //     return false;
        // }

}

    function validarCamposVacios() {
        //Declaracion variables id label
        var respuesta_nombre = document.getElementById('label_respuesta_nombre');
        var respuesta_clave = document.getElementById('label_respuesta_clave');
        var respuesta_clave_longitud = document.getElementById('label_respuesta_clave_longitud');
        var respuesta_confir_clave = document.getElementById('label_respuesta_confir_clave');
        var respuesta_clave_no_coincide = document.getElementById('label_respuesta_clave_no_coincide');

       /* if (nombre.value.length == 0) {
            //error vacio
            nombre.style.backgroundImage = "url('images/error-icon.svg')";
            nombre.style.backgroundRepeat = 'no-repeat';
            nombre.style.backgroundPosition = 'right';
            nombre.style.border = '3px solid red';
            respuesta_nombre.style.display = 'block';
            return;
        } else {
            nombre.style.backgroundImage = "url('images/success-icon.svg')";
            nombre.style.backgroundRepeat = 'no-repeat';
            nombre.style.backgroundPosition = 'right';
            nombre.style.border = '3px solid green';
            respuesta_nombre.style.display = 'none';
        }*/

        validarEmail();
      /*  if (clave.value.length == 0) {
            //error vacio
            clave.style.backgroundImage = "url('images/error-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid red';
            respuesta_clave.style.display = 'block';
            return;
        } else if (clave.value.length < 8){
            clave.style.backgroundImage = "url('images/error-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid red';
            respuesta_clave_longitud.style.display = 'block';
        }else{
            clave.style.backgroundImage = "url('images/success-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid green';
            respuesta_clave.style.display = 'none';
            respuesta_clave_longitud.style.display = 'none';
        }*/

    }
