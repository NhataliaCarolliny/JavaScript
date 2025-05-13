let nome, peso, altura;
let confirmacao;

nome = prompt("Qual o seu nome? ");
peso = prompt("Qual o seu peso? ");
altura = prompt("Qual sua altura? ");

peso = parseFloat(peso);
altura = parseFloat(altura);

let imc = peso/(altura*altura);
imc = parseFloat(Math.floor(imc)); 

confirmacao = confirm(`Seus dados: \n Nome: ${nome} \n Peso: ${peso} kg \n Altura: ${altura}  m \n\n Deseja continuar?`);

confirmacao == true ? alert(nome + ", seu IMC é  " + imc) : alert("Você saiu do programa");
