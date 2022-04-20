/*
if ((2 == 2 && 3 >= 1) || "a" == "b") document.write("verdadeiro");
else {
  document.write("falso");
}
*/

var nota = prompt("Qual foi a sua media?");
var faltas = prompt("Digite a quantidade de faltas:");

var media = 7;
var faltasMaximas = 15;

/*
if (nota >= media && faltas <= faltasMaximas) {
  document.write("PARABENS! VOCÊ PASSOU!!");
} else {
  document.write("KKK OLHA O BURRO! REPROVOU! ");
}
*/

var resuldado =
  nota >= media && faltas <= faltasMaximas
    ? "PARABENS! VOCÊ PASSOU!!"
    : "KKK OLHA O BURRO! REPROVOU!";

document.write(resuldado);
