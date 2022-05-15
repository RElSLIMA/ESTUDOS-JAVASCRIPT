// FUNÇÃO SEM RETORNO
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(8, 5);

// FUNÇÃO COM RETORNO
function soma(a, b = 2) {
  return a + b;
}
console.log(soma(8));

// ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL
const imprimirSoma2 = function (a, b) {
  console.log(a + b);
};
imprimirSoma2(8, 5);

// ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIAVEL
const soma2 = (a, b) => {
  return a + b;
};
console.log(soma2(52, 73));

// RETORNO IMPLÍCITO
const multiplicacao = (a, b) => a * b;
console.log(multiplicacao(78, 65));
