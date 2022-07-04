import cipher from './cipher.js';
let mensaje = document.getElementById("mensaje").value;
let cifrar = document.getElementById("cifrar").addEventListener ("click", encode);
let descifrar = document.getElementById("descifrar").addEventListener ("click", decode);
let desplazamiento = document.getElementById ("offset").value;
let resultado = document.getElementById ("resultado").value = cifrar (mensaje, desplazamiento);



// Función cifrar
function encode(mensaje, desplazamiento){
    let resultado1 = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    desplazamiento = (desplazamiento % 26 + 26) % 26;
  
    if (mensaje){
      for (let i = 0; i<mensaje.length; i++){
        if (alfabeto.indexOf(mensaje[i])!=-1){
          let posición = ((alfabeto.indexOf(mensaje[i])+desplazamiento)%26);
          resultado1 +=alfabeto[posición];
        }
        else
          resultado1 += mensaje[i];
      }
    }
    return resultado1;
  }


function decode(){

}
    
console.log(cipher);
