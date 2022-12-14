// Crie um programa que seja capaz de percorrer uma lista de números
// e imprima cada número par encontrado.
const numeros = [7, 14, 23, 45, 46, 87, 90, 92];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
