let idade;

idade = prompt("Informe sua idade: ");

idade = Number(idade);

let permitido = true;
permitido = idade >= 18 ? true : false;

idade >= 18 ? alert("Entrada liberada") : alert("Entrada negada");

console.log(permitido);
