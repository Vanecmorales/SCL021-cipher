const cipher = {
  
  encode: function (inputMensaje, inputOffset) {
    if (inputOffset === 'null' || inputMensaje.length === 0 || inputOffset === 0) {
      throw new TypeError();
    }
    let codeChar = 0;
    let mensajeEncoded = '';
    for (let index = 0; index < inputMensaje.length; index++) {

      let char = parseInt(inputMensaje.charCodeAt(index));

      if (char >= 65 && char <= 90) {

        codeChar = parseInt(((char - 65 + inputOffset) % 26) + 65);

        mensajeEncoded += String.fromCharCode(codeChar);

      } else if (char >= 97 && char <= 122) {
        codeChar = parseInt(((char - 97 + inputOffset) % 26) + 97);

        mensajeEncoded += String.fromCharCode(codeChar);
      } else {

        mensajeEncoded += String.fromCharCode(char);

      }
    }

    return mensajeEncoded;
  }
};
export default cipher;
