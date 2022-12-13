/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1 - preço do combustível;
2 - gasto médio de combustível do carro por km;
3 - distância em km da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

//preço do combustível (gasolina):
const precoCombustivel = 5.03;

//gasto médio do carro = 13km/l:
let kmPorLitro = 13.7;

//distância da viagem (bocaiuva à montes claros) = 48.1km:
let distanciaEmKm = 48.1;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(
  `O valor que você irá gastar de combustível na sua viagem é de: R\$${valorGasto.toFixed(
    2
  )}.`
);
