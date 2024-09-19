// for in -> Lê os índices ou chaves do objeto

// const frutas = ['laranja', 'uva', 'maça', 'pera', 'abacaxi']

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// for (let i in frutas) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Allison',
    sobrenome: 'Boita',
    idade: 24,
};

for (let i in pessoa) {
    console.log(i, pessoa[i]) // o I antes da vírgula exibe o nome do "campo"
}

for (let i in pessoa) {
    console.log(pessoa[i])
}