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
      const btnCopiar = document.createElement("button");
      btnCopiar.textContent = "Copiar";
      btnCopiar.classList.add("copiar")
      mensagem.appendChild(btnCopiar)
    } else {
      input.focus();
    }
  });

  descriptografar.addEventListener("click", (e) => {
    e.preventDefault();
      mensagem.innerHTML= `<p>${input.value}</p>`;
      mensagem.style.justifyContent = "center";
  });
})();
