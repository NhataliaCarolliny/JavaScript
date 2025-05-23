function calcularMedia (notas, media) {
    let notasEmOrdem = notas.sort((a, b) => b - a);
    let tresMelhores = notas.slice(0, 3)
    
    let soma = tresMelhores[0] + tresMelhores[1] + tresMelhores[2]

    media = soma/3

    console.log(`Média das três maiores notas (${tresMelhores}) => ${media}`);

}

const notas = [5, 8, 9, 3, 10, 7];

calcularMedia(notas)