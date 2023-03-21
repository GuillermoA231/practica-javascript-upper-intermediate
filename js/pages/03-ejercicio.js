let contenedorDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  contenedorDados[suma - 2]++;
}
document.write("<table>");
document.write("<tr><th>Suma de los dados</th><th>Apariciones</th></tr>");
for (let i = 0; i < 11; i++) {
  let suma = i + 2;
  let apariciones = contenedorDados[i];
  document.write("<tr><td>" + suma + "</td><td>" + apariciones + "</td></tr>");
}
document.write("</table>");
