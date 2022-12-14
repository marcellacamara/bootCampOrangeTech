/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
1 - preço do etanol;
2 - preço da gasolina;
3 - o tipo de combustível que está no seu carro;
2 - gasto médio de combustível do carro por km;
3 - distância em km da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

//preço do etanol:
const precoEtanol = 3.27;

//preço da gasolina:
const precoGasolina = 5.03;

//o tipo de combustível que está no seu carro:
let tipoCombustivel = "gasolina";

//gasto médio do carro = 13km/l:
let kmPorLitro = 13.7;

//distância da viagem (bocaiuva à montes claros) = 48.1km:
let distanciaEmKm = 48.1;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === "etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;

  console.log(
    `O valor que você irá gastar de etanol na sua viagem é de: R\$${valorGasto.toFixed(
      2
    )}.`
  );
} else {
  const valorGasto = litrosConsumidos * precoGasolina;

  console.log(
    `O valor que você irá gastar de gasolina na sua viagem é de: R\$${valorGasto.toFixed(
      2
    )}.`
  );
}
