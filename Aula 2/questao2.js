let valor;

valor = prompt("Informe o valor da compra: ");

let valorDesconto10 = valor*0.10;
let valorDesconto5 = valor*0.05;

console.log("Valor original: ", valor);

valor >= 100 ? console.log("Desconto aplicado: ", valorDesconto10) : console.log("Desconto aplicado: ", valorDesconto5);

valor >= 100 ? console.log("Valor total: ", valor-valorDesconto10) : console.log("Valor total: ", valor-valorDesconto5);
