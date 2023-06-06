(function() {
    //target doc sections
    let form = document.querySelector('.contact-form');
    let email = document.querySelector('#email');

    //validate email function
    function validateEmail() {
        let value = email.value;
        let hasAtSign = value.indexOf('@') > -1;
        let hasPeriod = value.indexOf('.') > -1;
        return value && hasAtSign && hasPeriod;
    }

    function validateForm() {
        return validateEmail;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); //FORM IS NOT SUBMITTING TO SERVER
        if (validateForm()) {
            alert('Success');
        }
    });

})();