const pessoa = {
    nome: 'Allison',
    sobrenome: 'Boita',
    idade: 24,
    endereco: {
        rua: 'Montevideo',
        numero: 230,
        complemento: 'D'
    }
}

// Atribuição via desestruturação

//const { nome, sobrenome } = pessoa
//console.log(nome, sobrenome)

//const { nome: titulo, sobrenome} = pessoa
//console.log(titulo, sobrenome)

const { nome, ...resto} = pessoa
console.log(resto)