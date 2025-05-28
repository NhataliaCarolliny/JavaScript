let melhorJogador = " ", melhorPontuacao = 999, numero, numeroSorteado, confirmacao;

while (true) {
    let nome, tentativas = 0;

    alert("Seja bem-vindo ao jogo da advinhação!");

    nome = prompt("Qual o seu nome, jogador?");

    alert(`Olá, ${nome}! \nPreparando o jogo...`);

    alert("Um número de 0 a 100 foi sorteado! \nTente advinhar qual é. Boa Sorte!");

    numeroSorteado = parseInt(Math.ceil(Math.random()*100));
    
    while(true) {
        
        numero = Number(prompt("Digite um número:"));
        tentativas++

        if(numero != numeroSorteado) {
            if(numero < numeroSorteado) {
                alert("O número que você digitou é MENOR que o número sorteado.");
            }
            else {
                alert("O número que você digitou é MAIOR que o número sorteado.");
            }
        }
        else {
            if(tentativas <= 3) {
                alert(`Parabéns, ${nome}!, você acertou em ${tentativas} tentativa(as). \nUau! Você é um gênio da adivinhação! 🧠`);
                
            }
            else if(tentativas >= 4 && tentativas <= 6) {
                alert(`Parabéns, ${nome}!, você acertou em ${tentativas} tentativa(as). \nMuito bem! Você foi rápido! 🚀`);
                
            }
            else {
                alert(`Parabéns, ${nome}!, você acertou em ${tentativas} tentativa(as). \nConseguiu! Persistência é tudo! 💪`);
                
            }
            if (tentativas < melhorPontuacao) {
                melhorPontuacao = tentativas;
                melhorJogador = nome;
            }
            break;
        }
    }
    confirmacao = confirm(`Sua pontuação foi de ${tentativas} tentativa(as). \n\nDeseja jogar novamente?`);

    if (confirmacao == false) {
        alert(`🏆 Novo recorde! ${melhorJogador} é o melhor jogador com ${melhorPontuacao} tentativa(as).`);
        break
    }
}
