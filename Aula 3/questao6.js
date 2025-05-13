let numero, soma = 0;

numero = Number(prompt("Digite o número: "));

for(let contador = 1; contador <= numero; contador++) {

    if(contador % 2 == 0) {
        soma += contador
    }
}

console.log(`A soma dos números pares de 1 até ${numero} é: ${soma}`);