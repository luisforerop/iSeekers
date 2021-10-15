let registros = []
exports.registros = registros;

exports.agregarRegistro = () => {
    const { value: password } = document.getElementById('contrasena')
    const { value: email } = document.getElementById('correo')
    const { value: num_documento } = document.getElementById('numero-documento')
    const { value: documentType } = document.getElementById('tipo-documento')
    registros.push(({
        password,
        email,
        num_documento,
        documentType
    }))
}

exports.ordenarArreglo = registersList => registersList.sort((a, b) => 
a.documentType !== 'P' ? 0 : a.num_documento > b.num_documento ? 1 : a.num_documento < b.num_documento ? -1 : 0) 

exports.filtrarCorreo = registersList => registersList.filter(registro => registro.email.includes('@email.com'))

exports.obtenerRegPasaporte = registersList => registersList.filter(registro => registro.documentType === 'P')