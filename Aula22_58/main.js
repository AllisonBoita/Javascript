// let numero = 0;

// while (numero <= 10){
//     console.log(numero)
//     numero++;
// }


// USAR O FOR NO LUGAR DO WHILE NO CASO ABAIXO.

// let nomes = ['allison', 'joao', 'lucas', 'celso']

// let i = 0

// while (i < nomes.length){
//     console.log(nomes[i])
//     i++;
// }

// WHILE

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 20;
let rand = random(min,max);

while (rand !== 10){
    rand = random(min,max);
    console.log(rand);
}

// DO WHILE

do {
    rand = random(min,max);
    console.log(rand);
} while(rand !== 10);
