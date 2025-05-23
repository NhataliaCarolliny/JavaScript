function gerenciarProdutos (produtos, comando) {
    if (comando === "listarDisponiveis") {
        console.log(Object.values(produtos));
    }
    else if (comando === "buscarProduto") {

    }
    else if (comando === "calcularValorTotal") {

    }
    else if (comando === "atualizarEstoque") {

    }
}

const produtos = [
    {nome: "Celular", preco: 2000, estoque: 5},
    {nome: "Notebook", preco: 3500, estoque: 0},
    {nome: "Fone de ouvido", preco: 250, estoque: 12}
];

gerenciarProdutos (produtos, "listarDisponiveis");