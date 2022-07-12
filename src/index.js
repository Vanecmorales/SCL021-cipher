import cipher from './cipher.js';
let btCifrar = document.getElementById("cifrar");
let btDescifrar = document.getElementById("descifrar");
let textFinal = document.getElementById("resultado");

btCifrar.addEventListener('click', mostrarCifrado)

function mostrarCifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value); // parseInt hace que el valor del desplazamiento se considere como un número y no un string
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeEncode = cipher.encode(inputOffset, inputMensaje);
    textFinal.value = mensajeEncode // elemento.value es lo que permite que se muestre el valor en un input o textarea, no funciona el innerHTML
}

btDescifrar.addEventListener('click', mostrarDescifrado)

function mostrarDescifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value);
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeDecode = cipher.decode(inputOffset, inputMensaje);
    textFinal.value = mensajeDecode
}