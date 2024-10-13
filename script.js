   // Función para procesar la respuesta y enviar el mensaje por WhatsApp
   function procesarRespuesta(decision) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var resultado = document.getElementById("result");

    if (nombre === "" || apellido === "") {
        resultado.textContent = "Por favor, rellena todos los campos.";
        resultado.style.color = "red";
        return;
    }

    // Parámetros del mensaje de WhatsApp
    var message = `HOLA🖐️!! Como Estas😁 ${nombre} ${apellido}, has ${decision} la salida.`;

    // Enlace para enviar mensaje a WhatsApp usando wa.me y el número +56941512165
    var whatsappLink = `https://wa.me/56941512165?text=${encodeURIComponent(message)}`;

    // Redirigir al usuario a la app de WhatsApp para enviar el mensaje
    window.open(whatsappLink, '_blank');
}

// Event listeners para los botones
document.getElementById("confirmButton").addEventListener("click", function() {
    procesarRespuesta("aceptado");
});

document.getElementById("declineButton").addEventListener("click", function() {
    procesarRespuesta("rechazado");
});




        // Reproducir video de presentación y luego mostrar la página principal
        var introVideo = document.getElementById('introVideo');
        var mainContent = document.getElementById('mainContent');
        var videoContainer = document.getElementById('videoContainer');

        introVideo.onended = function() {
            videoContainer.style.display = 'none'; // Ocultar el video de presentación
            mainContent.style.display = 'block';   // Mostrar la página principal
        };
        