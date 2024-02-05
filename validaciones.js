const InputName = document.getElementById("name");
const Email = document.getElementById("email");
const Asunto = document.getElementById("asunto");
const Mensaje = document.getElementById("mensaje");


//Validación del campo input
InputName.addEventListener("input", (e) => {
    e.preventDefault();

    if (InputName.validity.valueMissing === true) {
        InputName.setCustomValidity("Este campo no puede estar vacío");
    } else {
        InputName.setCustomValidity("");
    }
});

//Validación del campo email
Email.addEventListener("input", () => {

    if (Email.validity.typeMismatch) {
        Email.setCustomValidity("Ingresa un correo valido");
    } else {
        Email.setCustomValidity("");
    }
});

//Validación del campo email
Asunto.addEventListener("input", () => {

    if (Asunto.validity.valueMissing == true) {
        Asunto.setCustomValidity("Este campo no puede estar vacío");
    } else {
        Asunto.setCustomValidity("");
    }
});

//Validación del campo email
Mensaje.addEventListener("input", () => {

    if (Mensaje.validity.valueMissing == true) {
        Mensaje.setCustomValidity("Este campo no puede estar vacío");
    } else {
        Mensaje.setCustomValidity("");
    }
});