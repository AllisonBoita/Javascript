function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function() {
    console.log(mostrarHora())
}, 2000)

setTimeout(function(){
    clearInterval(timer)
}, 5000)
