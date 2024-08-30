const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNotaUm = e.target.querySelector('#primeiraNota')
    const inputNotaDois = e.target.querySelector('#segundaNota')

    const primeiraNota = Number(inputNotaUm.value)
    const segundaNota = Number(inputNotaDois.value)

    const calculo = calcularMedia (primeiraNota, segundaNota)

    const msg = `sua média é ${calculo}`

    setResultado(msg, true);
});

function calcularMedia (primeiraNota, segundaNota) {
    const calculo = (primeiraNota + segundaNota) / 2;
    return calculo.toFixed(2)
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p)
}