// OBJETO
const pessoa = {
  nome: "Gabriel Reis",
  idade: 22,
  endereço: {
    logadouro: "Rua Izoldino Diniz",
    numero: 111,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

// ARRAY
const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

/* FUNÇÃO
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
*/

// FUNÇÃO
function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 85]));
console.log(rand([805]));
console.log(rand([, 805]));
