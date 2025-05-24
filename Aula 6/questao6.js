function gerenciarProdutos (produtos, comando, nomeProduto, qntEstoque) {
    if (comando === "listarDisponiveis") {
        let listar = produtos.filter(function(produtos) {
            return produtos.estoque > 0;    
        })
        for (let chave in listar) {
            console.log(listar[chave].nome);
        }
    }
    else if (comando === "buscarProduto") {
        let buscar = produtos.find(function(buscar) {
            return buscar.nome === nomeProduto;
        });
        console.log(buscar);
    }
    else if (comando === "calcularValorTotal") {
        let soma = 0;
        for (let chave in produtos) {
            let valorTotal = produtos[chave].preco*produtos[chave].estoque;
            soma += valorTotal;
        }
        console.log(`Valor total do estoque: ${soma}`);
    }
    else if (comando === "atualizarEstoque") {
        for (let chave in produtos) {
            if (produtos[chave].nome === nomeProduto) {
                produtos[chave].estoque = qntEstoque;
                console.log(`ESTOQUE ATUALIZADO: \n${produtos[chave].nome} => Estoque: ${produtos[chave].estoque}`);
            }   
        }
    }
}

const produtos = [
    {nome: "Celular", preco: 2000, estoque: 5},
    {nome: "Notebook", preco: 3500, estoque: 0},
    {nome: "Fone de ouvido", preco: 250, estoque: 12}
];

// Listar disponíveis
gerenciarProdutos(produtos, "listarDisponiveis");
console.log("\n");

// Buscar um produto
gerenciarProdutos(produtos, "buscarProduto", "Notebook");
console.log("\n");

// Calcular valor total
gerenciarProdutos(produtos, "calcularValorTotal");
console.log("\n");

// Atualizar estoque
gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log("\n");
