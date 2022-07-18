const cipher = {//Objeto
  //Método de cifrado (encode)
  encode: function (inputOffset, inputMensaje){
    if (inputMensaje === "null" || inputOffset === 0) {
      throw new TypeError("no es valido");
      }

    let codigoAscii = 0;
    let mensajeEncode = '';
    
    //For: es un bucle que repetirá todo lo que esté entre las {} hasta la línea 32. La sintaxis: for (inicialización; condición; actualización){}
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje.charCodeAt(index); //chartCodeAt() obtiene el valor ascii de cada letra
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codigoAscii = ((ascii - 65 + inputOffset) % 26) + 65;
        mensajeEncode += String.fromCharCode(codigoAscii); //String.fromCharCode() va a retornar la letra de acuerdo al resultado obtenido de codigoAscii
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codigoAscii = ((ascii - 97 + inputOffset) % 26) + 97;
        mensajeEncode += String.fromCharCode(codigoAscii);
      }

      //Para números
      else if (ascii >= 48 && ascii <= 57){
        codigoAscii = (((ascii - 48 + inputOffset) % 10) + 48);
      mensajeEncode += String.fromCharCode(codigoAscii);
      }

      else {
        mensajeEncode += String.fromCharCode(ascii);
      }
    }
    return mensajeEncode;
  },
  //Método de descifrado (decode)
  decode: function (inputOffset, inputMensaje){
    if (inputMensaje === "null" || inputOffset === 0) {
      throw new TypeError("no es valido");
      }
    let codigoAscii = 0; 
    let mensajeDecode = '';
        
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje.charCodeAt(index);
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codigoAscii = ((ascii + 65 - inputOffset) % 26) + 65;
        mensajeDecode += String.fromCharCode(codigoAscii);
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codigoAscii = ((ascii - 122 - inputOffset) % 26) + 122;
        mensajeDecode += String.fromCharCode(codigoAscii);
      }

      //Para números
      else if (ascii >= 48 && ascii <= 57){
        codigoAscii = (((ascii - 57 - inputOffset) % 10) + 57);
        mensajeDecode += String.fromCharCode(codigoAscii);
        }

      else {
        mensajeDecode += String.fromCharCode(ascii);
      }
    }
    return mensajeDecode;
  },

    
};

export default cipher;
