const cipher = {//Objeto
  //Método de cifrado (encode)
  encode: function (inputOffset, inputMensaje){
    let codeAscii = 0;
    let mensajeEncode = '';
    
    //For es un bucle que repetirá todo lo que esté entre las {} hasta la línea 26. La sintaxis: for (inicialización; condición; actualización){}
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje.charCodeAt(index); //chartCodeAt() obtiene el valor ascii de cada letra
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codeAscii = ((ascii - 65 + inputOffset) % 26) + 65;
        mensajeEncode += String.fromCharCode(codeAscii); //String.fromCharCode() va a retornar la letra de acuerdo al resultado obtenido de codeAscii
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codeAscii = ((ascii - 97 + inputOffset) % 26) + 97;
        mensajeEncode += String.fromCharCode(codeAscii);
      }

      //Para números
      else if (ascii >= 48 && ascii <= 57){
        codeAscii = (((ascii - 48 + inputOffset) % 10) + 48);
      mensajeEncode += String.fromCharCode(codeAscii);
      }

      else {
        mensajeEncode += String.fromCharCode(ascii);
      }
    }
    return mensajeEncode;
  },
  //Método de descifrado (decode)
  decode: function (inputOffset, inputMensaje){
    let codeAscii = 0; 
    let mensajeDecode = '';
        
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje.charCodeAt(index);
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codeAscii = ((ascii + 65 - inputOffset) % 26) + 65;
        mensajeDecode += String.fromCharCode(codeAscii);
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codeAscii = ((ascii - 122 - inputOffset) % 26) + 122;
        mensajeDecode += String.fromCharCode(codeAscii);
      }

      //Para números
      else if (ascii >= 48 && ascii <= 57){
        codeAscii = (((ascii - 57 - inputOffset) % 10) + 57);
        mensajeDecode += String.fromCharCode(codeAscii);
        }

      else {
        mensajeDecode += String.fromCharCode(ascii);
      }
    }
    return mensajeDecode;
  },

    
};

export default cipher;
