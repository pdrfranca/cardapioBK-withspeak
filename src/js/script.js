function lerDescricao(botao) {
    // Interrompe qualquer fala em andamento antes de iniciar uma nova
    window.speechSynthesis.cancel();

    // Captura o texto do atributo alt da imagem dentro do mesmo div do botão clicado
    const descricaoImagem = botao.parentElement.querySelector('img').alt;

    // Chama a função lerTexto para falar a descrição
    lerTexto(descricaoImagem);
}

function lerTexto(texto) {
    const mensagem = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(mensagem);
}