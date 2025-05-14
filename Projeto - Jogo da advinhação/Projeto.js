let nome, numero, tentativas = 0, numeroSorteado, confirmacao, contador = 0;

alert("Seja bem-vindo ao jogo da advinhação!");

nome = prompt("Qual o seu nome, jogador?");

alert(`Olá ${nome}! \nPreparando o jogo...`)

while(true) {
    numeroSorteado = parseInt(Math.ceil(Math.random()*10));

    alert("Um número de 0 a 100 foi sorteado! \nTente advinhar qual é. Boa Sorte!")

    numero = Number(prompt("Digite um número:"));

    if(numero != numeroSorteado) {
        if(numero < numeroSorteado) {
            alert("O número que você digitou é MENOR que o número sorteado.");
        }
        else {
            alert("O número que você digitou é MAIOR que o número sorteado.");
        }
        tentativas++
    }
    else {
        if(tentativas <= 3) {
            alert(`Parabéns ${nome}!, você acertou em ${tentativas} tentativas. \nUau! Você é um gênio da adivinhação! 🧠`)
        }
        else if(tentativas >= 4 && tentativas <= 6) {
            alert(`Parabéns ${nome}!, você acertou em ${tentativas} tentativas. \nMuito bem! Você foi rápido! 🚀`)
        }
        else {
            alert(`Parabéns ${nome}!, você acertou em ${tentativas} tentativas. \nConseguiu! Persistência é tudo! 💪`)
        }   
    }

    confirmacao = confirm("Deseja jogar novamente?");
    
    confirmacao == true ? alert(`Reiniciando...`) : alert(`🏆 Novo recorde! ${nome} é o melhor jogador com ${tentativas} tentativas.`);

    contador++
}