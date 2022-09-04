(function () {
  const input = document.querySelector(".digite-texto-input");
  const mensagem = document.querySelector(".mensagem");
  const criptografar = document.querySelector(".criptografar");
  const descriptografar = document.querySelector(".descriptografar");

  criptografar.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
      mensagem.style.justifyContent = "space-between";
      const encode = btoa(input.value);
      mensagem.innerHTML = `<p>${encode}</p>`;
      mensagem.appendChild(btnCopiar());
    } else {
      input.focus();
    }
  });

  descriptografar.addEventListener("click", (e) => {
    e.preventDefault();
    mensagem.getElementsByTagName("p").textContent = `${input.value}`;
  });
})();

function btnCopiar() {
  const btnCopiar = document.createElement("button");
  btnCopiar.textContent = "Copiar";
  btnCopiar.classList.add("copiar");
  return btnCopiar
}
