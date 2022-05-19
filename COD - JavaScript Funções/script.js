/*
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
*/

// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// Passar função como parametro
function run(fun) {
  fun();
}
run(function () {
  console.log("Executando ...");
});

// Um função pode retornar/conter um função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
