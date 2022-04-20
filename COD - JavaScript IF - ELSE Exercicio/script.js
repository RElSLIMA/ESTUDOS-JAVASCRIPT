var idade = prompt("DIGITE A SUA IDADE: ");

if (idade >= 0 && idade < 15) {
  document.write("CRIANÇA");
}
if (idade >= 15 && idade < 30) {
  document.write("JOVEM ");
}
if (idade >= 30 && idade < 60) {
  document.write("ADULTO");
}
if (idade >= 60) {
  document.write("IDOSO");
}
