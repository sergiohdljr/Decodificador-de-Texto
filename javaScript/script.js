function Criptografar() {
    var texto = document.querySelector("input").value;
    texto = texto.replace("e", "enter");
    texto = texto.replace("i", "imes");
    texto = texto.replace("a", "ai");
    texto = texto.replace("o", "ober");
    texto = texto.replace("u", "ufat");
    document.querySelector(".container").innerHTML = "<h2>" + texto + "</h2>";
  }

  function Descriptografar() {
    var textoOriginal = document.querySelector("input").value;
    document.querySelector(".container").innerHTML = "<h2>"+textoOriginal+ "</h2>";
  }