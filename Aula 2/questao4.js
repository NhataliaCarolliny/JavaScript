let estoque, remover;

estoque = prompt("Quantidade atual no estoque: ");
remover = prompt("Quantidade que deseja remover: ");

let estoqueAtualizado = estoque - remover;

estoqueAtualizado > 0 ? console.log("Estoque atualizado: ", estoqueAtualizado) : console.log("Operação invalida: Quantidade insuficiente no estoque");