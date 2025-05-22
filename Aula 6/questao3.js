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