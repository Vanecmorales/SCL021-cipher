const cipher = {//Objeto
  encode: function (inputOffset, inputMensaje){//Método
    let codeAscii = 0; //¿puede ir comillas y luego colocar un parseInt en la línea 13 y 19 antes de la fórmula?
    let mensajeEncode = '';
    console.log(inputMensaje);
    //For es un bucle que repetirá todo lo que esté entre las {} hasta la línea 26. Sintaxis: for (inicialización; condición; actualización){}
    for (let index = 0; index < inputMensaje.length; index++) {
      let ascii = inputMensaje.charCodeAt(index); //chartCodeAt() obtiene el valor ascii de cada letra
      
      //Para mayúsculas
      if (ascii >= 65 && ascii <= 90) {
        codeAscii = ((ascii - 65 + inputOffset) % 26) + 65;
        mensajeEncode += String.fromCharCode(codeAscii); //String.fromCharCode() va a retornar la letra de acuerdo al resultado obtenido de codeAscii
      } 
      
      // Para minúsculas
      else if (ascii >= 97 && ascii <= 122) {
        codeAscii = (((ascii - 97 + inputOffset) % 26) + 97);
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
    console.log(inputMensaje);
    
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

      else {
        mensajeDecode += String.fromCharCode(ascii);
      }
    }
    return mensajeDecode;
  },

    
};

export default cipher;
