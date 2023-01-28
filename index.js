document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

//Declaracion variables id input


var inputs = document.getElementsByTagName('input');



function validarFormulario(evento) {
    evento.preventDefault();
    validarCamposVacios();
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
    var email = document.getElementById('email');
    var email_valido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    console.log(email_valido.test(email.value));
    if (!email_valido.test(email.value)) {
        return true;
    } else {
        return false;
    }

}

function validarCamposVacios() {
    //Declaracion variables id label
    let inputs2 = Array.prototype.slice.call(inputs)
    inputs2.forEach(input => {
        validar(input);
    })
}

function validar(campo) {
    var clave = document.getElementById('clave');
    var confir_clave = document.getElementById('confir_clave');
    var respuesta_clave_longitud = document.getElementById('label_respuesta_clave_longitud');
    var respuesta_clave_no_coincide = document.getElementById('label_respuesta_clave_no_coinciden');
    var respuesta_email_invalido= document.getElementById('label_respuesta_email_invalido');

    if (campo.value) {
        //si existe nombnre OK. si existe password tengo que validar:
        //1:que tenga al menos 8 caracteres y que password y confirm_password sean iguales.



        if (!(clave.value.length >= 8 && confir_clave.value.length >= 8) && (clave.value == confir_clave.value) && (clave.value.length != 0 || confir_clave.value.length != 0)) {
            //estan VACIOS, NO ES MAYOR O IGUAL A 8 Y SON IGUALES
            respuesta_clave_longitud.style.display = 'block';
            respuesta_clave_no_coincide.style.display = 'none';

            //    document.getElementById('label_respuesta_' + campo.id).style.display = 'block';
            clave.style.backgroundImage = "url('images/error-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid red';
            confir_clave.style.backgroundImage = "url('images/error-icon.svg')";
            confir_clave.style.backgroundRepeat = 'no-repeat';
            confir_clave.style.backgroundPosition = 'right';
            confir_clave.style.border = '3px solid red';

        } else if (!(clave.value.length >= 8 && confir_clave.value.length >= 8) && !(clave.value == confir_clave.value)) {
            //NO ES MAYOR IGUAL A 8, NO SON IGUALES
            respuesta_clave_no_coincide.style.display = 'block';
            respuesta_clave_longitud.style.display = 'block';

            //document.getElementById('label_respuesta_' + campo.id).style.display = 'block';
            clave.style.backgroundImage = "url('images/error-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid red';
            confir_clave.style.backgroundImage = "url('images/error-icon.svg')";
            confir_clave.style.backgroundRepeat = 'no-repeat';
            confir_clave.style.backgroundPosition = 'right';
            confir_clave.style.border = '3px solid red';

        } else if ((clave.value.length >= 8 && confir_clave.value.length >= 8) && !(clave.value == confir_clave.value)) {
            // ES MAYOR IGUAL A 8, NO SON IGUALES
            respuesta_clave_no_coincide.style.display = 'block';

            // document.getElementById('label_respuesta_' + campo.id).style.display = 'block';
            clave.style.backgroundImage = "url('images/error-icon.svg')";
            clave.style.backgroundRepeat = 'no-repeat';
            clave.style.backgroundPosition = 'right';
            clave.style.border = '3px solid red';
            confir_clave.style.backgroundImage = "url('images/error-icon.svg')";
            confir_clave.style.backgroundRepeat = 'no-repeat';
            confir_clave.style.backgroundPosition = 'right';
            confir_clave.style.border = '3px solid red';

        } else if ((clave.value.length >= 8 && confir_clave.value.length >= 8) && (clave.value == confir_clave.value)) {
            // ES MAYOR IGUAL A 8, SON IGUALES
            respuesta_clave_longitud.style.display = 'none';
            respuesta_clave_no_coincide.style.display = 'none';

            document.getElementById('label_respuesta_' + campo.id).style.display = 'none';
            campo.style.backgroundImage = "url('images/success-icon.svg')";
            campo.style.backgroundRepeat = 'no-repeat';
            campo.style.backgroundPosition = 'right';
            campo.style.border = '3px solid green';

        } else {
            document.getElementById('label_respuesta_' + campo.id).style.display = 'none';
            campo.style.backgroundImage = "url('images/success-icon.svg')";
            campo.style.backgroundRepeat = 'no-repeat';
            campo.style.backgroundPosition = 'right';
            campo.style.border = '3px solid green';
        }
        if(validarEmail()){
            respuesta_email_invalido.style.display = 'block';
            email.style.backgroundImage = "url('images/error-icon.svg')";
            email.style.backgroundRepeat = 'no-repeat';
            email.style.backgroundPosition = 'right';
            email.style.border = '3px solid red';
            document.getElementById('label_respuesta_' + campo.id).style.display = 'none';
        }else{
            respuesta_email_invalido.style.display = 'none';
            email.style.backgroundImage = "url('images/success-icon.svg')";
            email.style.backgroundRepeat = 'no-repeat';
            email.style.backgroundPosition = 'right';
            email.style.border = '3px solid green';
            document.getElementById('label_respuesta_' + campo.id).style.display = 'none';
        }

    } else {
        //si esta vacio

        document.getElementById('label_respuesta_' + campo.id).style.display = 'block';
        campo.style.backgroundImage = "url('images/error-icon.svg')";
        campo.style.backgroundRepeat = 'no-repeat';
        campo.style.backgroundPosition = 'right';
        campo.style.border = '3px solid red';
    }

}