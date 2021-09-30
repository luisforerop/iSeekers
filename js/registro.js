// export { default as agregarRegistro }
var db = []

const agregarRegistro = item => db.push(item)
const ordenarArreglo = arreglo => arreglo.sort()
const filtrarCorreo = arreglo => arreglo.filter(registro => registro.correo.includes('@email.com'))
const obtenerRegPasaporte = arreglo => arreglo.filter(registro => registro.tipoDocumento === 'pasaporte')

modules.exports.agregarRegistro = agregarRegistro;
modules.exports.ordenarArreglo = ordenarArreglo;
modules.exports.filtrarCorreo = filtrarCorreo;
modules.exports.obtenerRegPasaporte = obtenerRegPasaporte;