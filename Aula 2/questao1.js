let nome;
let idade;
let altura;
let genero;
let estudante;

nome = prompt("Seu nome: ");
idade = prompt("Sua idade: ");
altura = prompt("Sua altura: ");
genero = prompt("Qual seu gênero? ");
estudante = prompt("É estudante? ");

idade = Number(idade);
altura = Number(altura);

console.log("Bem-vindo(a), ", nome, "!");
console.log("Seu perfil");

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Altura: ", altura);
console.log("Gênero: ", genero);
console.log("É estudante? ", estudante);
