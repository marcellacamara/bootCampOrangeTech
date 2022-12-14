/* 
O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

fórmula do IMC:
IMC = peso / (altura * altura);

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com
a table abaixo:
IMC em adultos:
    - abaixo de 18.5 (abaixo do peso);
    - entre 18.5 e 25 (peso normal);
    - entre 25 e 30 (acima do peso);
    - entre 30 e 40 (obeso);
    - acima de 40 (obesidade grave);
*/

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return `Abaixo do peso. IMC: ${imc.toFixed(2)}.`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Peso normal. IMC: ${imc.toFixed(2)}.`;
  } else if (imc >= 25 && imc < 30) {
    return `Acima do peso. IMC: ${imc.toFixed(2)}.`;
  } else if (imc >= 30 && imc < 40) {
    return `Obeso. IMC: ${imc.toFixed(2)}.`;
  } else {
    return `Obesidade grave. IMC: ${imc.toFixed(2)}.`;
  }
}

//main, código principal, só existe dentro dos parenteses
(function () {
  let peso = 65;
  const altura = 1.61;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();
