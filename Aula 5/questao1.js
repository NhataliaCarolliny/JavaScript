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