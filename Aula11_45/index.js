// Operação ternária.

const pontuacaoUsuario = 999

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário vip')
// } else {
//     console.log('Usuário Normal')
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Aqui ele seleciona ou uma ou outra. como ele selecionou "null" será considerado o Preto.

// condicao ? valor verdadeiro : valor falso