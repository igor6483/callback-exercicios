const botao = document.querySelector("#btn");

const status = document.querySelector("#status");


function confirmaracao() {
    
    status.textContent = "confirmado";
}

botao.addEventListener("click", confirmaracao);
