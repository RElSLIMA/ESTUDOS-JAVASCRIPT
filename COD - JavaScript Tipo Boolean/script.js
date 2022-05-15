let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("OS VERDADEIROS");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!" TEXTO ");
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));
console.log(!!(isAtivo = true));

console.log("OS FALSOS");
console.log(!!0);
console.log(!!(isAtivo = false));
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log("FINALIZAR");
console.log(!!("" || null || 0 || " "));
console.log(!!null || 0 || " OLA ");
let nome = "";
console.log(nome || "desconhecido");
