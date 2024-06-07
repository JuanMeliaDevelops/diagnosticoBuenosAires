function validacionTelefono(event) {
    const charCode = event.charCode;
    // Permitir números (0-9) y el símbolo "+"
    if ((charCode >= 48 && charCode <= 57) || charCode === 43) {
        return true;
    }
    return false;
};

$('#contactForm').on('submit', function(event) {
    event.preventDefault();

    //Resetar alertas
    $('#alertaName').css('display', 'none');
    $('#alertaEmail').css('display', 'none');
    $('#alertaMessage').css('display', 'none');
    $('#alertaTel').css('display', 'none');
    $('#msgSubmit').css('color', '#546E7A').text('');

    //Valores de inputs
    const name = $('#name').val();
    const email = $('#email').val();
    const telefono = $('#telefono').val();
    const message = $('#message').val();

    //Validadores
    const validacionCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    const validado = 1;

   
    if (name.length <= 5) {
        $('#alertaName').css('display', 'block').text('Ingresa tu nombre completo');
        validado = 0;
    }

    if (!validacionCorreo.test(email)) {
        $('#alertaEmail').css('display', 'block').text('Ingresa un correo electronico valido');
        validado = 0;
    }

    if (telefono.length <= 7) {
        $('#alertaTel').css('display', 'block').text('Ingresa un numero de telefono valido');
        validado = 0;
    }

    if (message.length <= 20) {
        $('#alertaMessage').css('display', 'block').text('Tu mensaje debe ser mas largo');
        validado = 0;
    }

    //Ajax Formulario
    const datosFormulario = 'name=' + name + '&email=' + email + '&telefono=' + telefono + '&message=' + message;

    if (validado == 1) {
        $.ajax({
            url: "correo.php",
            type: "POST",
            data: datosFormulario,
            success: function(res) {
                if (parseInt(res) == 1) {
                    $('#msgSubmit').text('Tu mensaje ha sido enviado con exito!')
                } else {
                    $('#msgSubmit').css('color', 'red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intenta de nuevo.')
                }
            },
            error: function(res) {
                $('#msgSubmit').css('color', 'red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intenta de nuevo.')
            }
        });
    }
});