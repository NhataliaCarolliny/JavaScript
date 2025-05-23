function obterMaior (numeros) {
    let maiorNumero = 0;
    for (maiorNumero of numeros) {
        if(numeros > maiorNumero) {
            maiorNumero = numeros;
        } 
    }    
    console.log(`Maior número: ${maiorNumero}`);
}

function obterMenor (numeros) {
    let menorNumero = 0;
    for (let chave of numeros) {
        if(numeros[chave] < menorNumero) {
            menorNumero = numeros[chave];
        } 
    }    
    console.log(`Menor número: ${menorNumero}`);
}
    
const numeros = [-1, 3, 8, -2, 4, 10];

obterMaior(numeros);

obterMenor(numeros);
