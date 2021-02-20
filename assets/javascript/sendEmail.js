/****************************Function for contact form to send email and to reset page when message sent***********************************/

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_jgyzbkn', 'contact_form', this, 'user_b0Z2XWmpqu0pCQ9qU3sSr')
            .then(function () {
                alert('SUCCESS!');
            }, function (error) {
                alert('FAILED...' + error.message);
            });
    });
    return false;
}
