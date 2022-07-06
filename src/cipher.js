const cipher = {
  //Método de cifrado
  encode: function (inputOffset, inputMensaje){
    let codeAscii = 0; //¿puede ir comillas y luego colocar un parseInt en la línea 13 y 19 antes de la fórmula?
    let mensajeEncoded = '';
    console.log(inputMensaje);
    //For es un bucle que repetirá todo lo que esté entre las {}
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje[index].charCodeAt(); //obtiene el número de cada letra
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codeAscii = ((ascii - 65 + inputOffset) % 26) + 65;
        mensajeEncoded += String.fromCharCode(codeAscii);
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codeAscii = (((ascii - 97 + inputOffset) % 26) + 97);
        mensajeEncoded += String.fromCharCode(codeAscii);
      } 

      else {
        mensajeEncoded += String.fromCharCode(ascii);
      }
    }
    return mensajeEncoded;
  },

    
};

export default cipher;
