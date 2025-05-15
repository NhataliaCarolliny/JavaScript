function saudacao (nome = "Visitante") {
    return nome;
}

nome = prompt("Qual o seu nome? ", saudacao ());

console.log(`Seja bem-vindo ${nome}`);
