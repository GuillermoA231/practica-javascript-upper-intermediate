/*
Dificultad:  🟢🟡
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.
 */

 function verificarTexto(texto){
   typeof texto !== "string" 
   ? console.log("escriba un texto") 
   : texto.trim() === "" 
   ? console.log("string vacio") 
   : texto === texto.toUpperCase() 
   ? console.log("puras mayusculas") 
   : texto === texto.toLowerCase() 
   ? console.log("puras minusculas") 
   : console.log("mayusculas o minusculas")
 }

 let test = "HOLa";

 verificarTexto(test);