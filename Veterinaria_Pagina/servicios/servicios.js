document.addEventListener('DOMContentLoaded', function() {
    const ventanaEmergente = document.getElementById('ventanaEmergente');
    const backButton = document.getElementById('back-button');
    const dateInput = document.getElementById('Fecha');

    dateInput.addEventListener('focus', function() {
        ventanaEmergente.classList.add('show');
    });

    backButton.addEventListener('click', function() {
        ventanaEmergente.classList.remove('show');
    });

   
    document.querySelector('iframe').addEventListener('load', function() {
        const iframeDocument = this.contentDocument || this.contentWindow.document;

        iframeDocument.getElementById('accept-button').addEventListener('click', function() {
            const selectedDate = iframeDocument.getElementById('selected-date').value;
            const selectedTime = iframeDocument.getElementById('selected-time').value;

            if (selectedDate && selectedTime) {
                dateInput.value = `${selectedDate} ${selectedTime}`;
                ventanaEmergente.classList.remove('show');
            } else {
                alert('Por favor, seleccione una fecha y una hora.');
            }
        });
    });
});
