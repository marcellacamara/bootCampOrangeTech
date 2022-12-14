// function sayMyName(name) {
//   console.log("Your name is: " + name);
// }
// sayMyName("Marcella");

// function quadrado(valor) {
//   return valor * valor;
// }

// const quadradoDeDez = quadrado(10);
// console.log(quadrado(10) + quadrado(10));

function calcularJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

// console.log(incrementarJuros(100, 10));
// console.log(incrementarJuros(100, 15));
// console.log(incrementarJuros(100, 20));

function main() {
  console.log("Programa principal");
  calcularJuros();
}

main();
