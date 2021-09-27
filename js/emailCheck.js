
const checkCorreo = (valor) => {
    console.log(`Este es el valor: ${valor}`);
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
            alert("la direccion de Email "+valor+" es correcta");
        } else {
            alert("la direccion de Email "+valor+" no es correcta");
            return // verdadero o falso
        }
}

export default checkCorreo;
