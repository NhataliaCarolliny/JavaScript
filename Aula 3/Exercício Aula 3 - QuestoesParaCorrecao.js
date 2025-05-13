//Questão 1 - Habilitação

let anoNascimento, anoAtual, idade;

anoNascimento = Number(prompt("Digite o ano de nascimento: "));
anoAtual = Number(prompt("Digite o ano atual: "));

idade = anoAtual - anoNascimento;

idade = Number(idade);

if(idade >= 18) {
    alert(`Você completa ${idade} anos em ${anoAtual} e poderá tirar a habilitação.`);
}
else {
    alert(`Você completa ${idade} anos em ${anoAtual} e não poderá tirar a habilitação.`);
}

//Questão 2 - Faixa Etária

let idade;

idade = prompt("Qual a sua idade?");

idade = Number(idade);

if(idade >= 65) {
    console.log("Você é um idoso.");
}

else if(idade>=18) {
    console.log("Você é um adulto.");
}

else if(idade >= 13) {
    console.log('Você é uma adolescente');
}

else if (idade >= 0) {
    console.log("Você é uma criança.");
}

else{
    console.log("Idade invalida");
}

//Questão 3 - Classificação de IMC

let peso, altura, imc;

peso = parseFloat(prompt("Qual o seu peso (kg)? "));
altura = parseFloat(prompt("Qual a sua altura (m)? "));

imc  = peso / (altura*altura);
imc = parseFloat(Math.floor(imc));

if (imc < 18.5) {
    alert(`Seu IMC é: ${imc} \n Você está abaixo do peso.`);
}
else if (imc >=18.5 && imc < 25) {
    alert(`Seu IMC é: ${imc} \n Você tem peso normal.`);
}
else if (imc >= 25 && imc < 30) {
    alert(`Seu IMC é: ${imc} \n Você está com sobrepeso.`);
}
else if (imc >= 30 && imc < 35) {
    alert(`Seu IMC é: ${imc} \n Você está com obesidade grau 1.`);
}
else if (imc >= 35 && imc < 40) {
    alert(`Seu IMC é: ${imc} \n Você está com obesidade grau 2.`);
}
else {
    alert(`Seu IMC é: ${imc} \n Você está com obesidade grau 3.`)
}

//Questão 4 - Calculadora Simples 1

let n1, n2, opcao;

n1 = Number(prompt("Digite o primeiro número: "));
n2 = Number(prompt("Digite o segundo número: "));

opcao = Number(prompt("Escolha uma opção: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"));

switch(opcao) {
    case 1:
        console.log("Soma: ", n1+n2);
        break;
    case 2:
        console.log("Subtração: ", n1-n2);
        break
    case 3:
        console.log("Multiplicação: ", n1*n2);
        break;
    case 4:
        console.log("Divisão: ", n1/n2);
        break
    default:
        console.log("Opção inválida.")
}

//Questão 5 - Imprimindo Intervalo

let n1, n2;

n1 = Number(prompt("Valor inicial: "));
n2 = Number(prompt("Valor final: "));

for(let contador = n1; contador <= n2; contador++) {
    console.log(contador, " ");
}

//Questão 6 - Soma dos Pares

let numero, soma = 0;

numero = Number(prompt("Digite o número: "));

for(let contador = 1; contador <= numero; contador++) {

    if(contador % 2 == 0) {
        soma += contador
    }
}

console.log(`A soma dos números pares de 1 até ${numero} é: ${soma}`);

//Questão 7 - Positivos e Negativos

let numero, numeroPositivo = 0, numeroNegativo = 0, contador = 0;

while (true) {

    numero = Number(prompt("Digite um número: "));

    if (numero == 0) {
        console.log(`Quantidade de números positivos: ${numeroPositivo} \nQuantidade de números negativos: ${numeroNegativo}`);
        break
    }
    else if (numero > 0) {
        numeroPositivo++
    }
    else {
        numeroNegativo++
    }
    contador++
}

//Questão 8 - Digite a Senha

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