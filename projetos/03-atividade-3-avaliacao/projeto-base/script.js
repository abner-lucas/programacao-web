/* ========================================================
   PROJETO BASE · SCRIPT JAVASCRIPT
   Controla a interatividade de exibição dos detalhes
   dos cartões ao clicar no botão.
   ======================================================== */

// querySelectorAll("button") localiza todos os botões presentes na página.
// forEach() percorre cada botão encontrado para associar o evento de clique.
document.querySelectorAll(".card button").forEach(function (botao) {

    // Define a função que será executada quando o botão for clicado
    botao.onclick = function () {

        // closest(".card") busca o elemento com classe .card mais próximo do botão
        const card = botao.closest(".card");

        // toggle("aberto") adiciona a classe se ela não existir, ou remove se já existir
        card.classList.toggle("aberto");

        // Atualiza o texto do botão de acordo com o estado do cartão
        if (card.classList.contains("aberto")) {
            botao.textContent = "Ocultar detalhes";
        } else {
            botao.textContent = "Ver detalhes";
        }

    };

});
