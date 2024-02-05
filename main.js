//redireccion a repositorios
const btn_js = document.querySelector("#btn-proyecto-js").addEventListener("click", () => {
    window.open("https://github.com/anacristel/Portafolio");
});

const btn_react = document.querySelector("#btn-proyecto-react").addEventListener("click", () => {
    window.open("");
});

const btn_flutter = document.querySelector("#btn-proyecto-flutter").addEventListener("click", () => {
    window.open("");
});


const InputName = document.getElementById("name"),
    Email = document.getElementById("email"),
    Asunto = document.getElementById("asunto"),
    Mensaje = document.getElementById("mensaje"),
    name_val = document.querySelector("#name-val"),
    email_val = document.querySelector("#email-val"),
    asunto_val = document.querySelector("#asunto-val"),
    mensaje_val = document.querySelector("#textarea-val"),
    btn_enviar = document.querySelector("#btn-enviar");

// expresión regular para validar email
const isVAlidEmail = regEx_url => {
    const re = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    return re.test(String(regEx_url));
}

// validaciones del formulario de contacto
btn_enviar.addEventListener("click", (e) => {
    e.preventDefault();

    if (InputName.value === '') {
        name_val.classList.add("error");
        name_val.innerText = 'Este campo no puede estar vacío.';
    } else {
        name_val.innerText = '';
    }

    if (Email.value === '') {
        email_val.classList.add("error");
        email_val.innerText = 'Este campo no puede estar vacío.';
    } else if (!isVAlidEmail(Email.value)) {
        email_val.innerText = 'El email ingresado es incorrecto.'
    } else {
        email_val.innerText = '';
    }

    if (Asunto.value === '') {
        asunto_val.classList.add("error");
        asunto_val.innerText = 'Este campo no puede estar vacío.';
    } else {
        asunto_val.innerText = '';
    }

    if (Mensaje.value === '') {
        mensaje_val.classList.add("error");
        mensaje_val.innerText = 'Este campo no puede estar vacío.';
    } else {
        mensaje_val.innerText = '';
    }
});