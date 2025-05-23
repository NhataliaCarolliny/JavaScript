function calcularTotalVendas (vendas) {
    let totalVendas = 0;
    for (let index in vendas) {
        totalVendas += vendas[index];
    }
    console.log(totalVendas);
}

const vendas = [150, 200, 100, 50];

calcularTotalVendas(vendas);