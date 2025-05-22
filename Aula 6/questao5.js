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