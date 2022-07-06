import cipher from './cipher.js';
let btCifrar = document.getElementById("cifrar");
let btDescifrar = document.getElementById("descifrar");
let textFinal = document.getElementById("resultado");

btCifrar.addEventListener('click', mostrarCifrado)

function mostrarCifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value); // parseInt considerará el valor del desplazamiento como un número
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeEncoded = cipher.encode(inputOffset, inputMensaje);
    console.log(mensajeEncoded);
    textFinal.value = mensajeEncoded
}

btDescifrar.addEventListener('click', mostrarDescifrado)

function mostrarDescifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value); // parseInt considerará el valor del desplazamiento como un número
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeDecoded = cipher.decode(inputOffset, inputMensaje);
    console.log(mensajeDecoded);
    textFinal.value = mensajeDecoded
}







    
//console.log(cipher);
//console.log(cipher.encode);