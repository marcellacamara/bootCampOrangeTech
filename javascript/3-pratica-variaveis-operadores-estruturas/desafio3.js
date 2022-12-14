/*
Elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
    1 - à vista no débito, recebe 10% de desconto;
    2 - à vista no dinheiro ou pix, recebe 15% de desconto;
    3 - em duas vezes, preço normal de etiqueta sem juros;
    4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 20;
let formaDePagamento = 4;

if (formaDePagamento === 1) {
  const pagamentoDebito = precoEtiqueta * 0.1;
  console.log(`Você irá pagar: R$${precoEtiqueta - pagamentoDebito}.`);
} else if (formaDePagamento === 2) {
  const pagamentoDinheiroPix = precoEtiqueta * 0.15;
  console.log(`Você irá pagar: R$${precoEtiqueta - pagamentoDinheiroPix}.`);
} else if (formaDePagamento === 3) {
  const pagamentoDuasVezes = precoEtiqueta / 2;
  console.log(`Você irá pagar duas vezes de: R$${pagamentoDuasVezes}.`);
} else {
  const pagamentoMaisParcelas = precoEtiqueta + precoEtiqueta * 0.1;
  console.log(`Você irá pagar: R$${pagamentoMaisParcelas}.`);
}
