function exibirCatalogo (produtos) {
    console.log("Catálogo de Produtos:");
    for (let index in produtos) {
    console.log(produtos[index].nome, "- R$", produtos[index].preco);
}
}

const produtos = [
    { nome: "Teclado", preco: 100},
    { nome: "Monitor", preco: 800},
    { nome: "Webcam", preco: 250}
];

exibirCatalogo(produtos);