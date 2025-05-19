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

//Outra forma de fazer

function executarComAtraso(mensagem1, callback) {
    setTimeout(() => {
      callback(mensagem1);
    }, 2000);
}

function mensagem(mensagem) {
    console.log(mensagem);
}

executarComAtraso("Olá, tudo bem ?", mensagem);