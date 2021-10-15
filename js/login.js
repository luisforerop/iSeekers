let registros = []
exports.registros = registros

exports.agregarRegistro = () => {
  const { value: contrasena } = document.getElementById('contrasena')
  const { value: correo } = document.getElementById('correo')
  const { value: num_documento } = document.getElementById('numero-documento')
  const { value: documentType } = document.getElementById('tipo-documento')
  registros.push(({
      contrasena,
      correo,
      num_documento,
      documentType
  }))
}

const validarCAPTCHA = (captcha) => captcha == 15
exports.validarCAPTCHA = validarCAPTCHA

exports.login = () => {
  const { value: contrasena } = document.getElementById('contrasena')
  const { value: correo } = document.getElementById('correo')
  const { value: captcha } = document.getElementById('captcha')
  // const existUser = !!registros.find(item => {
  //   item.correo === correo && item.contrasena === contrasena
  // })
  // const validateCaptcha = validarCAPTCHA(captcha)
  // return validateCaptcha && existUser
  return correo == 'jose@hotmail.com'
}
