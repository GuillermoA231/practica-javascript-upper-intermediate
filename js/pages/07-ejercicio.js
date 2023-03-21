/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada 
con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario */
let numero;
function tablaMultiplicar(num) {
  document.write(`<table>`);
  document.write(`<thead>`);
  document.write(`tabla del ${num}`);
  document.write(`</thead>`);
  document.write(`<body>`);
  for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    document.write(`<tr><td> ${num} x ${i} = ${resultado} </td></tr>`);
  }
  document.write(`</body>`);
  document.write(`</table>`);
}

do {
  numero = prompt("Ingrese un número para ver su tabla de multiplicar:");
} while (isNaN(numero) || numero < 1 || numero > 10);

tablaMultiplicar(numero);
