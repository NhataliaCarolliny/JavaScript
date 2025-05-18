function executarComAtraso(mensagem1, callback) {
    console.log(`${mensagem1}`); 
    callback();
}

function mensagem() {
    console.log("Tchau!");
}

setTimeout(function () {
    executarComAtraso("olá, tudo bem?", mensagem);
}, 2000)