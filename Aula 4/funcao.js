function somar (n1, n2) {
    return n1 + n2;
}

let soma = somar (3, 4);
console.log(`Soma: ${soma}`);

function soma1 (a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1 (2, 3, 4));

function soma1 (a, b, c) {
    a = a !== undefined ? a : 1;

    return a + b + c;
}

function soma1 (a = 1, b = 1, c = 1) {
    return a + b + c;
}