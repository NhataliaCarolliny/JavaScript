const calcularDesconto = (preco, porcentagemDesconto) => {
    porcentagemDesconto = (porcentagemDesconto/100) * preco;
    return preco - porcentagemDesconto;
}

while (true) { 
    alert("Calcular desconto!");
    
    preco = Number(prompt("Qual o preço do produto?"));

    porcentagemDesconto = Number(prompt("Qual a porcentagem de desconto?"));

    console.log(calcularDesconto(preco, porcentagemDesconto));
    
    alert(`Preço do produto: ${preco} \nDesconto: ${porcentagemDesconto}% \nValor do produto com desconto: ${calcularDesconto(preco, porcentagemDesconto)}`);

    let confimacao;
    
    confimacao = confirm("Deseja calcular o desconto de outro produto?");

    if (confimacao == true) { 
    }
    else {
        break;
    }
}