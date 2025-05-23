//Questão 1 - Gerenciador de Lista de Tarefas

function gerenciarTarefas (tarefas, acao, tarefa) {
    if (acao === "adicionarInicio") {
        tarefas.unshift(tarefa);
    }
    else if (acao === "adicionarFim") {
        tarefas.push(tarefa);
    }
    else if (acao === "removerInicio") {
        tarefas.shift(tarefa);
    }
    else if (acao === "removeFim") {
        tarefas.pop(tarefa);
    }
}

const tarefas = ["Estudar", "Treinar", "Ler"];

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");

console.log(tarefas);

//Questão 2 - Manipulando Notas de um Aluno

function calcularMedia (notas) {
    let notasEmOrdem = notas.sort((a, b) => b - a);
    let tresMelhores = notas.slice(0, 3)
    
    let soma = tresMelhores[0] + tresMelhores[1] + tresMelhores[2]

    let media = soma/3

    console.log(`Média das três maiores notas (${tresMelhores}) => ${media}`);

}

const notas = [5, 8, 9, 3, 10, 7];

calcularMedia(notas)

//Questão 3 - Somando Números

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

//Questao 4 - Maior e Menor

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

//Questao 5 - Exibindo Nomes Formatados

function exibirNomes (nomes) {
    nomes.forEach(function(nome){
        console.log(`Bem-vindo, ${nome}!`)
    })
}

const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

//Questao 6 - Transformando um Array de Preços

function converterMoeda (precosDolares) {
    let precoReais = precosDolares.map(function(real) {
    return real * 5;
    });

    console.log(precoReais);

}

const precosDolares = [10, 20, 30];

converterMoeda(precosDolares);

//Questao 7 - Filtrando Devedores

function filtrandoDevedores (dividas) {
    let maioresDividas = dividas.filter(function(divida) {
        return divida >= 80;
    })
    console.log(maioresDividas);
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];

filtrandoDevedores(dividas);

//Questao 8 - Total de Vendas

function calcularTotalVendas (vendas) {
    let totalVendas = 0;
    for (let index in vendas) {
        totalVendas += vendas[index];
    }
    console.log(totalVendas);
}

const vendas = [150, 200, 100, 50];

calcularTotalVendas(vendas);