document.addEventListener('DOMContentLoaded', function() {
    var modalIniciarSesion = document.getElementById('modal-iniciar-sesion');

    var botonAbrirModal = document.getElementById('boton-abrir-modal');

    var spanCerrar = document.getElementsByClassName('cerrar')[0];
  
    var formIniciarSesion = document.getElementById('form-iniciar-sesion');

    botonAbrirModal.onclick = function() {
        modalIniciarSesion.style.display = 'block';
    }

    spanCerrar.onclick = function() {
        modalIniciarSesion.style.display = 'none';
    }
.onclick = function(event) {
        if (event.target == modalIniciarSesion) {
            modalIniciarSesion.style.display = 'none';
        }
    }

    formIniciarSesion.addEventListener('submit', function(event) {
        event.preventDefault();
        var usuario = formIniciarSesion.elements['usuario'].value;
        var contrasena = formIniciarSesion.elements['contrasena'].value;

        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);

        modalIniciarSesion.style.display = 'none';
    });

});
