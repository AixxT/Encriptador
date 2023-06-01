let mensaje = document.querySelector('.mensaje');
let traduccion = document.querySelector('.encripted-text');

let btnEncriptar = document.querySelector('.button-enc');
let btnDesencriptar = document.querySelector('.button-desenc');
let btnCopiar = document.querySelector('.button-copy');

var keys = [[["e"], ["enter"]],
[["i"], ["imes"]],
[["a"], ["ai"]],
[["o"], ["ober"]],
[["u"], ["ufat"]]];



//Encriptar

function encriptar(str) {
    // Toma el array dado, revisa si posee vocales y las encripta
    for (let i = 0; i < keys.length; i++) {
        // includes determina si el valor se encuentra o no en el array especificado
        if (str.includes(keys[i][0])) {
            str = str.replaceAll(keys[i][0], keys[i][1]);
        }
    }
    return str;
}
function habilitarVentanaTraduccion() {
    document.getElementById("no-data-window").style.display = "none";
    document.getElementById("hidden").style.display = "flex";
}
function initEncriptar() {
    let txtEncriptado = encriptar(mensaje.value);
    habilitarVentanaTraduccion();
    traduccion.value = txtEncriptado;
    mensaje.value = "";

}

btnEncriptar.onclick = initEncriptar;

//Desencriptar

function desencriptar(str) {
    // Toma el array dado, revisa si posee vocales y las desencripta
    for (let i = 0; i < keys.length; i++) {
        // includes determina si el valor se encuentra o no en el array especificado
        if (str.includes(keys[i][1])) {
            str = str.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return str;
}

function initDesencriptar() {
    let txtDesencriptado = desencriptar(mensaje.value);
    traduccion.value = txtDesencriptado;
    mensaje.value = "";
}

btnDesencriptar.onclick = initDesencriptar;

// Copiar
function mostrar() {
    Swal.fire({
        position: 'top-end',
        html: 'Copiado al portapapeles',
        width: 300,
        color: 'rgba(254, 88, 98, 1)',
        backdrop: `
    rgba(254, 88, 98, 0.1)
  `,
        showConfirmButton: false,
        timer: 1300,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function copiar() {
    let textoCopiado = traduccion.value;
    navigator.clipboard.writeText(textoCopiado);
    mostrar();
}

btnCopiar.onclick = copiar;






