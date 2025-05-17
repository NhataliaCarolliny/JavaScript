let nome = [], numero, tentativas = [], i = 0, numeroSorteado, confirmacao, melhorJogador, contador = 0;

while (true) {

    alert("Seja bem-vindo ao jogo da advinhação!");

    nome[contador] = prompt("Qual o seu nome, jogador?");

    alert(`Olá, ${nome[contador]}! \nPreparando o jogo...`);

    alert("Um número de 0 a 100 foi sorteado! \nTente advinhar qual é. Boa Sorte!");

    numeroSorteado = parseInt(Math.ceil(Math.random()*100));

    console.log(numeroSorteado);
    
    while(true) {
        
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
                alert(`Parabéns ${nome[contador]}!, você acertou em ${tentativas} tentativa(as). \nUau! Você é um gênio da adivinhação! 🧠`)
                break
            }
            else if(tentativas >= 4 && tentativas <= 6) {
                alert(`Parabéns ${nome[contador]}!, você acertou em ${tentativas} tentativa(as). \nMuito bem! Você foi rápido! 🚀`)
                break
            }
            else {
                alert(`Parabéns ${nome[contador]}!, você acertou em ${tentativas} tentativa(as). \nConseguiu! Persistência é tudo! 💪`)
                break
            }  
        }
    }
    confirmacao = confirm("Deseja jogar novamente?");
        if (confirmacao == false) {
            alert(`🏆 Novo recorde! ${nome[contador]} é o melhor jogador com ${tentativas} tentativa(as).`);
            break
        }
    contador++
}
