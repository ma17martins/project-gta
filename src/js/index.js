/*

Objetivo 1 - quando o usuário clicar no botão de seleção de platforms deve abrir uma caixa com os botões de seleção de platform
    Passo 1 - pegar o botão de seleção de platforms no JS pra poder verificar quando o usuário clicar em cima dele
    
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuário clicar, adicionar a classe active na listagem de platforms dentro do botão pra que o conteúdo apareça


Objetivo 2 - caso a lista de botões de platforms já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe active pra que ele esconda o conteúdo novamente

*/

const button = document.querySelector(".btn-platforms");
const elementplatforms = document.querySelector(".btn-platforms .platforms");

button.addEventListener("click", () => {
    elementplatforms.classList.toggle("active");
});


