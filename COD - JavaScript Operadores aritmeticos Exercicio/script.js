var nome = prompt("Digite o seu nome: ");
var altura = prompt("Digite a sua altura em CM: ");
var peso = prompt("Digite o seu peso: ");

var altura = parseFloat(altura);
var peso = parseFloat(peso);

altura = altura / 100;

var M = peso / (altura * altura);

var classificacao = "";

if (M < 16) {
  classificacao = "Baixo peso muito grave.";
}
if (M >= 16 && M < 16.99) {
  classificacao = "Baixo peso grave.";
}
if (M >= 17 && M < 18.49) {
  classificacao = "Baixo peso.";
}
if (M >= 18.5 && M < 24.99) {
  classificacao = "Peso normal.";
}
if (M >= 25 && M < 29.99) {
  classificacao = "Sobrepeso.";
}
if (M >= 30 && M < 34.99) {
  classificacao = "Obesidade grau I.";
}
if (M >= 35 && M < 39.99) {
  classificacaoe = "Obesidade grau II.";
}
if (M > 40) {
  classificacao = "Obesidade grau III.tg";
}

document.write(
  nome +
    " possui índice de massa corporal igual a " +
    M +
    ", sendo classificado como:  " +
    classificacao
);
