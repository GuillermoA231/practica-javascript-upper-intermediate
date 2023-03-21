/*
Dificultad:  🟢🟡
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
*/
function ladosdeUnRectangulo(ladoA, ladoB) {
    let perimetro = 0;
    !isNaN(ladoA) ? !isNaN(ladoB) 
    ? (perimetro = 2 * (ladoA + ladoB), console.log(perimetro)) 
    : console.log(perimetro) 
    : console.log("mal ladoA");

  
  }

  ladosdeUnRectangulo(10,20);