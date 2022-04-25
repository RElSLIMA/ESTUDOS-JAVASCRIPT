function exibirArtigo(id, callbackSucesso, callbackErro) {
  if (true) {
    callbackSucesso(
      "funçoes de callback em JS",
      "funçoes de callback sao muito utilizadas..."
    );
  } else {
    callbackErro("erro ao recuperar os dados");
  }
}

var callbackSucesso = function (titulo, descricao) {
  document.write("<h1>" + titulo + "</h1>");
  document.write("<hr>");
  document.write("<p>" + descricao + "</p>");
};
var callbackErro = function (erro) {
  document.write("<p><b>Erro:</b>" + erro + "</p>");
};

exibirArtigo(1, callbackSucesso, callbackErro);
