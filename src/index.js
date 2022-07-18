import cipher from './cipher.js';
let botonCifrar = document.getElementById("cifrar");
let botonDescifrar = document.getElementById("descifrar");
let textoFinal = document.getElementById("resultado");
let botonCopiar = document.getElementById("copiar");


botonCifrar.addEventListener('click', mostrarCifrado)

function mostrarCifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value); // parseInt hace que el valor del desplazamiento se considere como un número y no un string
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeEncode = cipher.encode(inputOffset, inputMensaje);
    textoFinal.value = mensajeEncode // elemento.value es lo que permite que se muestre el valor en un input o textarea, no funciona el innerHTML
}

botonDescifrar.addEventListener('click', mostrarDescifrado)

function mostrarDescifrado(){
    let inputOffset = parseInt(document.getElementById("offset").value);
    let inputMensaje = document.getElementById("mensaje").value;
    let mensajeDecode = cipher.decode(inputOffset, inputMensaje);
    textoFinal.value = mensajeDecode
}

botonCopiar.addEventListener('click', copiarTexto)

function copiarTexto(){
    textoFinal.select();
    textoFinal.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("¡Copiado!");
    
}
