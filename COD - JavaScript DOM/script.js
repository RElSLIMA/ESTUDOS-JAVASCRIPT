function caracter() {
  var valor = document.getElementById("texto").value;
  document.getElementById("texto").value = "";

  valor.trim();

  switch (valor) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      document.getElementById("idade").value += valor;
      break;
    default:
      document.getElementById("nome").value += valor;
  }
}
//
//
//
//
//
//
function mudaCor(corDeFundo) {
  document.getElementById("fundo").style.background = corDeFundo;
}
//
//
//
//
//
//
function mudarEstilo() {
  document.getElementById("fundo").className = "estilo2";
}

function limparEstilo() {
  document.getElementById("fundo").className = "estilo";
}
//
//
//
//
//
//
function acionaCampo() {
  document.getElementById("mensagem").style.background = "yellow";
}
function validaCampo() {
  var valorCampo = document.getElementById("mensagem").value;
  if (valorCampo.length < 6) {
    document.getElementById("mensagem").style.background = "red";
  } else {
    document.getElementById("mensagem").style.background = "green";
  }
}

/*



function foco() {
  alert("Esse elemento é o foco");
}

onfocus="foco()"


function semfoco() {
  alert("Esse elemento perdeu o foco");
}

onblur="semfoco()"


function selecionar() {
  alert("Um valor foi selecionado");
}

onchange="selecionar()"

console.log(document.getElementById("nome"));

console.log(document.getElementsByTagName("input"));

console.log(document.getElementsByClassName("radio"));

console.log(document.getElementsByName("url"));



*/
