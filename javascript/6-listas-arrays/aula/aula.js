const alunos = ["Marcella", "Nanda", "Ernandes"];
console.log(alunos[0]);

//adicionando item a lista
alunos.push("Janete");
console.log(alunos[3]);
alunos[4] = "João";
console.log(alunos[4]);

// lista vazia e adicionando items depois
const frutas = [];
frutas.push("maça");
frutas.push(10);
console.log(frutas);

//removendo items da lista
const numeros = ["1", "2", "3", "4", "5"];
console.log(numeros);
console.log(numeros.pop()); //remove o ultimo item da lista
console.log(numeros);
console.log(numeros.shift()); //remove o primeiro item da lista
console.log(numeros);

//saber quantos items a lista possui
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);

//estruturas de repetição
const nome = "Marcella Câmara";

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}
