// Menu do celular

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");


botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("aberto");

});


// Fecha o menu quando o usuário clicar em um link

const linksMenu = document.querySelectorAll(".menu a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

    });

});


// Atualiza automaticamente o ano do rodapé

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();