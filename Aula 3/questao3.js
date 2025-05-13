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