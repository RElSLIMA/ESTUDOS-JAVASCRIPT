const notas = [6.4, 8.9, 6.5, 9.9, 7.8];
for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: "gabriel",
  sobrenome: "reis",
  idade: 22,
  peso: 64,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
