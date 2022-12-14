/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 à 100. 
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
Dados de entrada:
    5
    50
    10
    98
    23
Saída: 
    98
*/
const { gets, print } = require("./1-exercicio-auxiliar");

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//   const numeroSorteado = gets();
//   numerosSorteados.push(numeroSorteado);
// }

// let = maiorNumero = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//   const numeroSorteado = numerosSorteados[i];
//   if (numeroSorteado > maiorNumero) {
//     maiorNumero = numeroSorteado;
//   }
// }

// print(maiorNumero);

//a mesma solução simplificada
const quantidadeDeAlunos = gets();
let = maiorNumeroEncontrado = 0;

for (let i = 0; i <= quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorNumeroEncontrado) {
    maiorNumeroEncontrado = numeroSorteado;
  }
}
print(maiorNumeroEncontrado);
