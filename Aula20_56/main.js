const nome = ['Allison Boita', 'Luiz', 'Gustavo']

// FOR -> Geralmente com iteráveis (arrays ou strings)

 for (let i = 0; i < nome.length; i++) {
     console.log(nome[i])
 }

// FOR IN -> Retorna o índice ou chave (string, array ou objetos)

 for (let i in nome) {
     console.log(nome[i])
 }

// FOR OF -> Retorna apenas o valor (iteráveis, arrays ou strings)

 for (let i of nome) {
     console.log(i)
 }

// FOR EACH

nome.forEach(function(nome, i) {
    console.log(nome, i)
})

// Iteravel: São grupos de valores que podem ser percorridos um a um, como arrays e strings por exemplo.