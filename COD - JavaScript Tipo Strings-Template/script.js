let massa = "é massa";

console.log("gabriel reis".length);

console.log("Gabriel Reis".charAt(2));

console.log("Gabriel Reis".indexOf("r"));

console.log("Gabriel Reis".replace("Reis", "é muito lindo"));

console.log("Gabriel Reis".substr(8, 4));

console.log("Gabriel Reis".toUpperCase());

console.log("Gabriel Reis".toLowerCase());

console.log("       Gabriel Reis      ".trim());

console.log("Gabriel Reis".charCodeAt(2));

console.log("Gabriel Reis".substring(2));

console.log("Gabriel Reis".substring(2, 5));

console.log("Gabriel Reis ".concat(massa).concat("!"));

console.log("Gabriel Reis".split("i"));

const nome = "Gabriel";
const concatenacao = "Olá " + nome + "!";
console.log(concatenacao);

const template = `
    Oi    
    ${nome}!`;
console.log(template);

let numero = 45;
console.log(`1 + 1 = ${numero}`);

const maiuscula = (texto) => texto.toUpperCase();
console.log(`Atenção... ${maiuscula("cuidado!!!")}`);
