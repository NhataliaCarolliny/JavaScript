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