// Objeto date

//const data = new Date()

//os meses começam em 0, sendo 0-janeiro, 1-fevereiro...
//dia da semana inicia em 0, sendo 0-domingo
//const data = new Date(2019, 3, 20, 15, 14, 27) // ano, mes, dia, hora, mes, segundos.
//console.log(data.toString())

const data = new Date('2019-04-20 20:15:59.100')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia Semana', data.getDay()) // 0 - Domingo, 6 - Sábado
console.log(data.toString())
