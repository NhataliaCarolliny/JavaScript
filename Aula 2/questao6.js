let nome, peso, altura;
let confirmacao;

nome = prompt("Qual o seu nome? ");
peso = prompt("Qual o seu peso? ");
altura = prompt("Qual sua altura? ");

let imc = peso/(altura*altura);

console.log("Seus dados:");
console.log("Nome: ", nome);
console.log("Peso: ", peso, "kg");
console.log("Altura: ", altura, "m");

confirmacao = confirm("Deseja continuar?");

confirmacao = true ? console.log(nome, "seu IMC é", imc) : console.log("Você saiu do programa");
