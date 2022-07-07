var textoPadrao = `
  <div class="mostrar-text">
  <div class="container">
    <img src="/imagens/imgaroto-lupa.svg" alt="" />
    <div class="textos">
      <h2>
        Nenhuma mensagem <br />
        encontrada
      </h2>
      <p>
        Digite um texto que você deseja<br />
        criptografar ou Descriptografar.
      </p>
    </div>
  </div>
</div>`


function Criptografar() {
  var texto = document.querySelector("input").value;

  if (texto === "") {
    return document.querySelector(".container").innerHTML = "<div>" + textoPadrao + "</div>";
  }
  texto = Base64.encode(texto);
  document.querySelector(".container").innerHTML = "<h2>" + texto + "</h2>";
}

function Descriptografar() {
  var textoOriginal = document.querySelector("input").value;
  if (textoOriginal === "") {
    return document.querySelector(".container").innerHTML = "<div>" + textoPadrao + "</div>";
  }

  document.querySelector(".container").innerHTML = "<h2>" + textoOriginal + "</h2>";
}