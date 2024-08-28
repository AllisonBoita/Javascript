/* 
Entre 0 - 11: Bom dia
Entre 12 - 17: Boa tarde
Entre 18 - 23: Boa noite 
*/

// O IF pode ser executado sozinho
// O else if não pode ser executado sozinho
// O else não pode ser executado sozinho
// Só posso ter um else na checagem

const hora = 15;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite') 
} else {
    console.log('Hora está incorreta')
}