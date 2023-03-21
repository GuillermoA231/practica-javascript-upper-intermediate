/*Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/

let ciudades = [    ];
let nuevaCiudad;
function mostrarCiudades() {
  for (let i = 0; i < ciudades.length; i++) {
    console.log(ciudades[i]);
  }
}
do {
  nuevaCiudad = prompt("ingresar nombre ciudad0");
  nuevaCiudad == null
    ? mostrarCiudades()
    : nuevaCiudad.trim()
    ? nuevaCiudad.length >= 50
      ? alert("El texto ingresado tiene mas de 50 caracteres")
      : ciudades.push(nuevaCiudad)
    : alert("el texto solo contiene textos en blanco");
} while (nuevaCiudad !== null);
