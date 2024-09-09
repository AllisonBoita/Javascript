// Let e const tem escopo de bloco.  {... bloco }
// Var só tem escopo de função.



let nome = "Allison"

if (verdadeira) {
    let nome = "Teste" // Essa variável LET não é a mesma de cima pois está num escopo de bloco.
}

function teste () {
    var nome = 'Allison'
    console.log(nome) // assim está ok. se eu chamar essa var fora do escopo de função ela não vai funcionar.
}

console.log(nome)
