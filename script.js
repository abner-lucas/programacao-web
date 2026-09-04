document.querySelectorAll("button").forEach(function (botao) { // document representa a página; querySelectorAll("button") 
//                                                                localiza todos os elementos button; forEach() repete a
//                                                                ação para cada botão encontrado.

    botao.onclick = function () { // onclick define uma função que será executada quando o botão receber um clique.

        const card = botao.parentElement.parentElement; // parentElement acessa o elemento pai; o primeiro chega à div info 
        //                                                 e o segundo chega à div card.

        card.classList.toggle("aberto"); // classList reúne as classes do cartão; toggle() adiciona a classe aberto se
        //                                   ela não existir ou remove se já existir.

        botao.textContent = card.classList.contains("aberto") ? "Ocultar detalhes" : "Ver detalhes"; // textContent altera
                                                                                                    //  o texto do botão;
                                                                                                    // contains() verifica se
                                                                                                    // aberto existe;
                                                                                                    //  ? : escolhe entre duas
                                                                                                    // opções.

    }; // Encerra a função executada pelo clique.

}); // Encerra a repetição aplicada a todos os botões.