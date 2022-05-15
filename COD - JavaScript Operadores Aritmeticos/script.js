/*var num1 = prompt("Digite o primeiro numero: ");
var num2 = prompt("Digite o segundo numero: ");

var num1 = parseInt(num1);
var num2 = parseInt(num2);

document.write(
  "A soma entre " + num1 + " e " + num2 + " é " + (num1 + num2) + "<br>"
);
document.write(
  "A subtração entre " + num1 + " e " + num2 + " é " + (num1 - num2) + "<br>"
);
document.write(
  "A multiplicação entre " + num1 + " e " + num2 + " é " + num1 * num2 + "<br>"
);
document.write(
  "A divisão entre " + num1 + " e " + num2 + " é " + num1 / num2 + "<br>"
);
document.write(
  "O modulo entre " + num1 + " e " + num2 + " é " + (num1 % num2) + "<br>"
);
document.write("O incremento de " + num1 + " é " + ++num1 + "<br>");
document.write("O decremento de " + num2 + " é " + --num2 + "<br>");

*/

const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo);
