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