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