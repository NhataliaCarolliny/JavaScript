//Questão 1 - Cadastro de Usuário

function criarUsuario (nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

const criarUsuario1 = new criarUsuario("Nhatalia", 28, "nhataliacarolliny@gmail.com");

console.log(criarUsuario1);

//Questão 2 - Atualizar Idade

function atualizarIdade (usuario, idade) {
    usuario.idade = idade;
}

const usuario = {
    nome: "Nhatalia",
    idade: 28,
    email: "nhataliacarolliny@gmail.com"
};

atualizarIdade(usuario, 30);

console.log(usuario.idade);

//Questão 3 - Explorador de Objetos

function explorarObjeto (pessoa, operacao) {
    if (operacao === "chaves") {
        console.log(Object.keys(pessoa));
    }
    else if (operacao === "valores") {
        console.log(Object.values(pessoa));
    }
    else if (operacao === "entradas") {
        console.log(Object.entries(pessoa));
    }
}

const pessoa = {
  nome: "Nhatalia",
  idade: 28,
  cidade: "Maceió"
};

explorarObjeto(pessoa, "chaves");
explorarObjeto(pessoa, "valores");
explorarObjeto(pessoa, "entradas");

//Questão 4 - Catálogo de Produtos

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

//Questão 5 - Proteção de Objetos

function protegerObejetos (produto, modoDeProtecao) {
    if (modoDeProtecao === "extensivel") {
        Object.preventExtensions(produto);
        console.log("Extensivel: ", ture,", Selado: ", false,", Congelado: ", false);
    }
    else if (modoDeProtecao === "selado") {
        Object.seal(produto);
        console.log("Extensivel: ", false,", Selado: ", true,", Congelado: ", false);
    }
    else if(modoDeProtecao === "congelado") {
        Object.freeze(produto);
        console.log("Extensivel: ", false,", Selado: ", false,", Congelado: ", true);
    }
}

const produto = {
    nome: "Câmera",
    preco: 1200
};

let resultado = protegerObejetos(produto, "selado");

console.log(resultado);

//Questão 6 - Sistema de Gerenciamento de Produtos

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
