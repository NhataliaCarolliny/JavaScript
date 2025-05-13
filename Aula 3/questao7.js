let numero, numeroPositivo = 0, numeroNegativo = 0, contador = 0;

while (true) {

    numero = Number(prompt("Digite um número: "));

    if (numero == 0) {
        console.log(`Quantidade de números positivos: ${numeroPositivo} \nQuantidade de números negativos: ${numeroNegativo}`);
        break
    }
    else if (numero > 0) {
        numeroPositivo++
    }
    else {
        numeroNegativo++
    }
    contador++
}