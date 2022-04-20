function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento;

  document.write("o terrreno possui " + area + " metros quadrados");

  calcularAreaTerreno(prompt("largura"), prompt("comprimento"));

  return area;
}
calcularAreaTerreno(prompt("largura"), prompt("comprimento"));
