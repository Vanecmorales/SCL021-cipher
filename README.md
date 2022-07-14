# SCL021-cipher
Repositorio primer proyecto para cohort SCL021 de Santiago de Chile 
# Cifrado César

## 1. Proyecto

Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.

## 2. Definición del producto

### Usuarios y objetivo

Está aplicación web está diseñada para usuarios que requieran crear mensajes codificados o descifrarlos; desde niños que deseen jugar, adolescentes que quieran compartir información con mejores amigos o adultos que tengan que compartir información confidencial con otra persona o hasta incluso generar contraseñas con mayor complejidad.

 Para lograr esto, se consideró un diseño sencillo que incorpora los siguientes elementos:
Instrucciones: 
- Le permite al usuario saber qué tipo de datos se pueden cifrar o descifrar (mayúsculas, minúsculas y números) y la longitud que puede tener el texto.
- Sección para ingresar el mensaje: Corresponde al área donde podrá escribir su mensaje, elegir el nivel de seguridad (el desplazamiento) y los botones para cifrar o descifrar mensajes.
- Sección de resultado: Se refiere al área donde finalmente se mostrará el mensaje codificado y decodificado. Además cuenta con las opciones de copiar el texto para que pueda compartirlo con mayor facilidad y de borrar.

### Prototipo inicial
![](https://github.com/Vanecmorales/SCL021-cipher/blob/main/src/img/prototipo%20inicial.jpg)

### Prototipo final
Finalmente, la última versión del producto varió en relación al prototipo inicial en la distribución de los elementos y paleta de colores, sin embargo fueron incorporadas todas las funcionalidades consideradas al inicio.

![](https://github.com/Vanecmorales/SCL021-cipher/blob/main/src/img/prototipo%20final.jpg)
