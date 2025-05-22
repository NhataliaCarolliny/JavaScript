//Forma simples:

const criarUsuario = {
    nome: "Nhatalia",
    idade: 28,
    email: "nhataliacarolliny@gmail.com"
};

console.log(criarUsuario);

//Segunda forma de fazer:

function criarUsuario (nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

const criarUsuario1 = new criarUsuario("Nhatalia", 28, "nhataliacarolliny@gmail.com");

console.log(criarUsuario1);