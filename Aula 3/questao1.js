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