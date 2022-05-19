// WHILE
/*
function getInteirosAleatoriosEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteirosAleatoriosEntre(-1, 10);
  console.log(`Opção escplhida foi ${opcao}.`);
}

console.log("Até a próxima!");
*/
//
//
//
// DO - WHILE

function getInteirosAleatoriosEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = getInteirosAleatoriosEntre(-1, 10);
  console.log(`Opção escplhida foi ${opcao}.`);
} while (opcao != -1);

console.log("Até a próxima!");
