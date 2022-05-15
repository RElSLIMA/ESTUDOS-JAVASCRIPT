/*// 1 Sentença de codigo

console.log("hello word");

// 2 Blocos de codigos

{
  console.log("passo 01");
  console.log("passo 02");
}

// 3 Exercicio bloco impar / bloco par

{
  console.log("IMPAR");
  console.log("1");
  console.log("3");
  console.log("5");
  console.log("7");
  console.log("9");
}
{
  console.log("PAR");
  console.log("2");
  console.log("4");
  console.log("6");
  console.log("8");
  console.log("10");
}

// 4 Variavel (VAR ou LET) 1

var nome = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

// 5 Variavel (VAR ou LET) 2

let preco = 19.9;
let desconto = 0.4;

console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);

let nome = "Caderno";
let categoria = "Papelaria";

console.log(
  "PRODUTO: " +
    nome +
    ", CATEGORIA: " +
    categoria +
    ", PREÇO: " +
    precoComDesconto
);

// 6 Variavel constante

const a = 6;
console.log(a);

// 7 Exercicio variavel

const PI = 3.141592;
var raio = 10;
var areaCirc = PI * raio * raio;

console.log(
  "O valor da area da circunferencia é: " + areaCirc + " metros quadrados"
);

*/

// 7 Exercicio troca de valores da variavel

let a = 7;
let b = 94;
let c = a;
console.log(a, b);

a = b;
b = c;

console.log(a, b);
