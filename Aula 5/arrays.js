const numeros = [];

numeros [0] = 1;
numeros [1] = 2;
numeros [2] = 3;

console.log(numeros);

numeros [0] = 4;

//Dinâmico
 
const alunos = ['Bia', 'Carlos', 'Ana'];

alunos [3] = 'Jorge';

//push = adiciona no fim:

alunos.push('Marcos');

console.log(alunos.push('Marcos'));

//unshift = incerir no começo:

alunos.unshift("Nhatalia");

//pop = remove o ultimo

let ultimo = alunos.pop();
console.log(ultimo);

//shift = remove o primeiro

alunos.shift();

console.log(alunos);