// ------------ VALIDACION --------------
document.addEventListener('DOMContentLoaded', function() {
    let btnsnd = document.getElementById('btn-send');

    btnsnd.addEventListener('click', function(event) {
        // Prevenir el envío del formulario y la recarga de la página
        event.preventDefault();

        // Obtener los campos del formulario
        let nombre = document.getElementById('name');
        let apellido = document.getElementById('lastname');
        let mail = document.getElementById('email');
        let fecha = document.getElementById('date');
        let pais = document.getElementById('country');

        // Limpiar mensajes de error anteriores
        document.getElementById('err-name').innerHTML = '';
        document.getElementById('err-lastname').innerHTML = '';
        document.getElementById('err-email').innerHTML = '';
        document.getElementById('err-date').innerHTML = '';
        document.getElementById('err-country').innerHTML = '';

        let hasErrors = false; //Variable para enviar el form

        // Validar el campo de nombre
        if (nombre.value.trim() === '') {
            document.getElementById('err-name').innerHTML = "Debes completar el nombre";
            hasErrors = true;
        }

        // Validar el campo de apellido
        if (apellido.value.trim() === '') {
            document.getElementById('err-lastname').innerHTML = "Debes completar el apellido";
            hasErrors = true;
        }

        // Validar el campo de email
        if (mail.value.trim() === '') {
            document.getElementById('err-email').innerHTML = "Debes completar el mail";
            hasErrors = true;
        } else {
            // Validación del formato del email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(mail.value.trim())) {
                document.getElementById('err-email').innerHTML = "El formato del correo electrónico no es válido";
                hasErrors = true;
            }
        }

        // Validar el campo de fecha
        const today = new Date();
        const birthDate = new Date(fecha.value);

        // Verificar si la fecha está vacía
        if (!fecha.value) {
            document.getElementById('err-date').innerHTML = "Debe ingresar una fecha";
            hasErrors = true;
        } else {
            // Verificar si la fecha es futura
            if (birthDate > today) {
                document.getElementById('err-date').innerHTML = "La fecha no puede ser futura";
                hasErrors = true;
            } else {
                // Verificar si la persona es mayor de 18 años
                const age = today.getFullYear() - birthDate.getFullYear();
                const month = today.getMonth() - birthDate.getMonth();
                const day = today.getDate() - birthDate.getDate();

                if (month < 0 || (month === 0 && day < 0)) {
                    age--;
                }

                if (age < 18) {
                    document.getElementById('err-date').innerHTML = "Debes ser mayor de 18 años";
                    hasErrors = true;
                }
            }
        }

        // Validar el campo de pais
        if (pais.value.trim() === '') {
            document.getElementById('err-country').innerHTML = "Debes elegir un pais";
            hasErrors = true;
        }

        // Si no hay errores, se confirma el envío del formulario
        if (!hasErrors) {
            Swal.fire({
                title: "Perfecto!",
                text: "Muchas gracias ",
                icon: "success"
            });
        }
    });
});


// Modo alto contraste
document.addEventListener('DOMContentLoaded', function() {
    const btnHighContrast = document.getElementById('btn-hc');
    const btnClassic = document.getElementById('btn1');

    // Función para activar el modo de alto contraste
    btnHighContrast.addEventListener('click', function() {
        document.body.classList.add('high-contrast');
    });

    // Función para activar el modo clásico
    btnClassic.addEventListener('click', function() {
        document.body.classList.remove('high-contrast');
    });
});