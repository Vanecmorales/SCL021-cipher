const cipher = {
  // ...
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
};

export default cipher;
