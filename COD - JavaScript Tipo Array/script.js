const valores = [7.7, 8.3, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 5.9;
valores[5] = "abacate";
valores[6] = false;
console.log(valores);

console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[5];
console.log(valores);
