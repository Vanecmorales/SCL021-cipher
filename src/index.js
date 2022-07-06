import cipher from './cipher.js';
let inputOffset = parseInt(document.getElementById("offset").value); // parseInt considerará el valor del desplazamiento como un número
let inputMensaje = document.getElementById("mensaje").value;
let mensajeEncoded = cipher.encode(inputOffset, inputMensaje);
let btCifrar = document.getElementById("cifrar");


btCifrar.addEventListener('click', mostrarCifrado)
function mostrarCifrado(){
    mensajeEncoded ;
}







    
console.log(cipher);
console.log(cipher.encode);