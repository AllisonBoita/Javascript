const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento Previnido');
    setResultado('Olá Allison');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);

}