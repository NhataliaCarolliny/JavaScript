let senha, contador = 0;

do {

    senha = Number(prompt("Digite a senha: "));

    if(senha == 1234) {
        alert("Acesso liberado.");
    }
    else {
        alert("Senha incorreta. \nTente novamente.");
    }
    contador++
} while (senha != 1234);