// Inputs form
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const bodyInput = document.querySelector('#message');

//UI
const form = document.querySelector('#form');
const btn = document.querySelector('button[type=submit]');

class Ui {
    printAlert(msg, type) {
        //Crear DIV contenedor
        const divAlert = document.createElement('div');
        divAlert.classList.add('alert', 'animate__animated', 'animate__fadeInLeftBig');

        if (type === 'error') {
            divAlert.classList.add('alert-error')
        } else {
            divAlert.classList.add('alert-succes')
        }

        // Message for the alert
        divAlert.textContent = msg;

        // Add to DOM
        document.querySelector('.contact').insertBefore(divAlert, document.querySelector('.container'));

        setInterval(() => {
            divAlert.classList.remove('animate__animated', 'animate__fadeInLeftBig');
            divAlert.classList.add('animate__animated', 'animate__fadeOutRightBig');
        }, 4000);

        setTimeout(() => {
            divAlert.remove();
        }, 5000);

    }
}

const ui = new Ui();

const formInputs = {
    name: '',
    email: '',
    subject: '',
    body: '',
}

// Add data to formInputs object
const datosInput = (e) => {
    formInputs[e.target.name] = e.target.value;
    console.log(formInputs);
    
}

// Send Email
const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, subject, body } = formInputs;

    // Validate
    if (name === '' || email === '' || subject === '' || body === '') {
        ui.printAlert('Todos los campos son obligatorios', 'error')
        return;           
    }

    ui.printAlert('Mensaje enviado correctamente')
    
    // Reset object
    resetFormObject();

    // Reset form
    form.reset();

}

// Events register
const eventListeners = () => {
    nameInput.addEventListener('input', datosInput);
    emailInput.addEventListener('input', datosInput);
    subjectInput.addEventListener('input', datosInput);
    bodyInput.addEventListener('input', datosInput);

    form.addEventListener('submit', sendEmail);
}
eventListeners();


function resetFormObject() {
    formInputs.name = '';
    formInputs.email = '';
    formInputs.subject = '';
    formInputs.body = '';
}