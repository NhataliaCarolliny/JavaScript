function converterMoeda (precosDolares) {
    let precoReais = precosDolares.map(function(real) {
    return real * 5;
    });

    console.log(precoReais);

}

const precosDolares = [10, 20, 30];

converterMoeda(precosDolares);