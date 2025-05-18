function verificarIdade (nome, idade) {
    
    nome = nome || `Visitante`;
    
    if (idade >= 18 && idade < 120) {
        return alert(`Olá, ${nome}! Você é maior de idade.`);
    }
    else if (idade > 0 && idade < 18) {
        return alert(`Olá, ${nome}! Você é menor de idade.`);

    }
    else {
        return alert("Idade inválida, reinicie o programa.");
    }

}

while (true) {
    let confirmacao;

    confirmacao = confirm("Deseja verificar uma idade?");

    if (confirmacao == true) {
        nome = prompt("Qual seu nome?");
        idade = prompt("Qual sua idade?");
    }
    else {
        break;
    }
    verificarIdade(nome, idade);
}