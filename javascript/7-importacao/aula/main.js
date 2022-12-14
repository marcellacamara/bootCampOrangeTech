//importando o que foi exportado do outro arquivo
const funcoes = require("./funcoes-auxiliares");

console.log(funcoes);
console.log(funcoes.gets());

//outra sintaxe mais clean
const { gets, print } = require("./funcoes-auxiliares");

print(gets());

//códigos equivalentes
//const {nome} = pessoa;
//const nome = pessoa.nome;
