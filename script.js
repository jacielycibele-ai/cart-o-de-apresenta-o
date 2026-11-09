const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

    mensagem.textContent =
        "✨ Você é capaz de aprender coisas incríveis. Continue praticando!";

    botao.textContent = "Surpresa desbloqueada!";

});