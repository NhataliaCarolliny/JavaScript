function somarNumeros (numeros) {
    let soma = 0;
    for (let index in numeros) {
        if (numeros[index] % 2 == 0 && numeros[index] % 3 == 0) {
            soma += numeros[index];
        }
    }
    console.log(`A soma dos números divisíveis por 2 e 3: ${soma}`);
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

somarNumeros(numeros);