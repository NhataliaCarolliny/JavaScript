function saudacao (nome) {
    nome = nome || `Visitante`;
    return alert(`Seja bem-vindo ${nome}`);
}

nome = prompt("Qual o seu nome?");

saudacao();
