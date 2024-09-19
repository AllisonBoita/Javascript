const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

// Pegar estilos computados do CSS do body
const estilosBody = getComputedStyle(document.body); // função do navegador, funciona apenas web.
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let i of ps) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
}