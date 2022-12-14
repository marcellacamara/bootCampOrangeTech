//classe é a definição, e instância é a ocorrência
class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

//instanciando uma pessoa
const marcella = new Pessoa("Marcella", 26);
console.log(marcella);

//objeto
//objeto é uma coleção dinâmica de chave e valor
//uma função dentro do objeto é chamado de método
const pessoa = {
  nome: "Marcella Câmara",
  idade: 26,
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};
pessoa.descrever();

//acessando valores em uma sintaxe mais dinâmica
const atributo = "idade";

console.log(pessoa["idade"]);
pessoa["nome"] = "teste"; //dinâmico
pessoa.nome = "teste"; //direto

//sobrescrevendo valores
pessoa.nome = "nanda";
pessoa.idade = 18;

//incrementando valores no objeto
pessoa.altura = 1.61;
console.log(pessoa);

//deletando um valor do objeto
delete pessoa.nome;
console.log(pessoa);
