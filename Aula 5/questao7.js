function filtrandoDevedores (dividas) {
    let maioresDividas = dividas.filter(function(divida) {
        return divida >= 80;
    })
    console.log(maioresDividas);
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];

filtrandoDevedores(dividas);