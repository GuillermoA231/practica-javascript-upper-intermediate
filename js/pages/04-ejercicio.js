/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 */

function esParOImpar(numero){
    let numeroTexto = "";
    return numero % 2 == 0 ? numeroTexto = "Es impar" : numeroTexto = "es Par";
    return numeroTexto;
}

console.log(esParOImpar(10));
console.log(esParOImpar(11));