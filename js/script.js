(function () {
  const input = document.querySelector(".digite-texto-input")
  const mensagem = document.querySelector(".mensagem");
  const criptografar = document.querySelector(".criptografar")
  const descriptografar = document.querySelector(".descriptografar")

  criptografar.addEventListener('click',(e)=>{
    e.preventDefault()
    if(input.value){
        const encode = btoa(input.value)
        mensagem.innerHTML = `<p>${encode}</p>`
    }else{
        input.focus()
    }
  })

  descriptografar.addEventListener('click',(e)=>{
    e.preventDefault()
    if(mensagem.children.length === 1){
        const decode = atob(mensagem.firstChild.textContent);
        mensagem.innerHTML = `<p>${decode}</p>`;    
    }
    
  })

})();
