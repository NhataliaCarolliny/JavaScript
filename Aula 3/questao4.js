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