//Questão 1 - Verificador de idade

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
        idade = Number(prompt("Qual sua idade?"));
    }
    else {
        break;
    }
    verificarIdade(nome, idade);
}

//Questão 2 - Calculadora simples 2

function calcular (n1 = 1, n2 = 1, op) {
    if (op === "+") {
        return n1 + n2;
    }
    else if (op === "-") {
        return n1 - n2;
    }
    else if (op === "*") {
        return n1*n2;
    }
    else if (op === "/") {
        return n1/n2;
    }
    else {
        return n1%n2;
    }
}

let contador = 0;

while (true) {
    
    n1 = Number(prompt("Digite o 1º número: "));
    n2 = Number(prompt("Digite o 2º número: "));
    op = prompt("Digite o operador: ");

    let calculo = calcular(n1, n2, op);

    if (n2 == 0 && op == "/") {
        alert(`Não é possível fazer a operação.`);
    }
    else if (n2 == 0 && op == "%") {
        alert(`Não é possível fazer a operação.`);
    }
    else {
        alert(`Calculo: ${calculo}`);
    }

    let confimacao = confirm("Deseja fazer outra operação?");
    
    if (confimacao == false) {
        break
    }
    
    contador++
}

//Questão 3 - Saudação com horário

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

//Questão 4 - Cálculo de Desconto

const calcularDesconto = (preco, porcentagemDesconto) => {
    porcentagemDesconto = (porcentagemDesconto/100) * preco;
    return preco - porcentagemDesconto;
}

while (true) { 
    alert("Calcular desconto!");
    
    preco = Number(prompt("Qual o preço do produto?"));

    porcentagemDesconto = Number(prompt("Qual a porcentagem de desconto?"));
    
    alert(`Preço do produto: ${preco} \nDesconto: ${porcentagemDesconto}% \nValor do produto com desconto: ${calcularDesconto(preco, porcentagemDesconto)}`);

    let confimacao;
    
    confimacao = confirm("Deseja calcular o desconto de outro produto?");

    if (confimacao == false) { 
       break;
    }
}

//Questao 5 - Mensagem com Atraso

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