/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodados.
Crie um método que dado à quantidade  de km e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  kmPorLitro;

  constructor(marca, cor, kmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.kmPorLitro = kmPorLitro.toFixed(2);
  }

  calcularGastoDoPercurso(distanciaEmKm, precoCombustivel) {
    return (distanciaEmKm / this.kmPorLitro) * precoCombustivel;
  }
}

const agile = new Carro("Chevrolet", "Vermelho", 13.7);
console.log(agile);
console.log(agile.calcularGastoDoPercurso(48.1, 5.03).toFixed(2));
