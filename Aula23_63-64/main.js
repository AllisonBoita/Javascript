// try {
//     console.log(naoExisto)
// } catch(err) {
//     console.log('Retorno de erro')
// }

function soma (x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Precisam ser numeros')
    }

    return x + y;
}

try {
    console.log(soma(1,'teste'))
} catch(error){
    console.log(error)
}
    