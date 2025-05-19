function mensagemDeBoasVindas (nome) {
    let data = new Date();
    let hora = data.getHours();

    if (hora >= 6 && hora <= 11){
        return alert(`Bom dia, ${nome}!`);
    }
    else if (hora >= 12 && hora <= 17) {
        return alert(`Boa tarde, ${nome}!`);
    }
    else if (hora >= 18 && hora <= 23) {
        return alert(`Boa noite, ${nome}!`);
    }
    else {
        return alert(`Olá, ${nome}`);
    }
}

nome = prompt("Qual o seu nome?");

mensagemDeBoasVindas(nome);