import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController;
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const botaoImportar = document.querySelector('#botao-importa');
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else
    throw Error('Não foi possivel encontrar o botão');
