import { checkContrasena, checkCorreo, checkNumDocumento } from './form.js'
import { agregarRegistro } from './registro'

// NODOS
const password = document.getElementById('contrasena')
const email = document.getElementById('email')
const documentNumber = document.getElementById('documento')
const documentType = document.getElementById('documentType')
const submitButton = document.getElementById('btn-registrar')

// VALIDADO
let emailChecked = false;
let passwordChecked = false;
let documentNumberChecked = false;

password.addEventListener('input', (e)=>{
    passwordChecked = checkContrasena(e.target.value)    
})

email.addEventListener('input', (e)=>{
    emailChecked = checkCorreo(e.target.value)
})

documentNumber.addEventListener('input', (e)=>{
    documentNumberChecked = checkNumDocumento(e.target.value, documentType.value)
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const infoRegistro = {
        type: documentType.value,
        document: documentNumber.value,
        email: email.value,
        password: password.value
    }
    agregarRegistro(infoRegistro);
    db.sort()

    console.log(infoRegistro);
    const checkedState = emailChecked && passwordChecked && documentNumberChecked;
    console.log(email.value);
    console.log(checkedState ? 'validado': 'no validado');


})
