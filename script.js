// ========================================
// 1. MENU DE NAVEGAÇÃO (CELULAR)
// ========================================
const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
    });

    document.querySelectorAll(".menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// ========================================
// 2. ANO AUTOMÁTICO NO RODAPÉ
// ========================================
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ========================================
// 3. FORMULÁRIO DE CONTATO
// O site é estático: copia a mensagem, não envia e-mails.
// ========================================
const formContato = document.getElementById("formContato");

if (formContato) {
    formContato.addEventListener("submit", async function (evento) {
        evento.preventDefault();

        if (!formContato.reportValidity()) return;

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const retorno = document.getElementById("retornoContato");
        const texto = `Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\n${mensagem}`;

        // Remove campos de cópia criados em tentativas anteriores.
        document.querySelectorAll(".mensagem-para-copiar").forEach(function (campo) {
            campo.remove();
        });

        try {
            await navigator.clipboard.writeText(texto);
            retorno.textContent = "Mensagem copiada! Envie-a pelo canal de contato da equipe.";
        } catch (erro) {
            retorno.textContent = "Copie a mensagem abaixo e envie pelo canal de contato da equipe:";

            const campo = document.createElement("textarea");
            campo.className = "mensagem-para-copiar";
            campo.value = texto;
            campo.readOnly = true;
            campo.rows = 7;
            retorno.after(campo);
            campo.focus();
            campo.select();
        }
    });
}
