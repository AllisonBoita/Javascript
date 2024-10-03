const inputNovaTarefa = document.querySelector('.input-nova-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')


function criarLi() {
    const li = document.createElement('li')
    return li
}

inputNovaTarefa.addEventListener('keypress', function(evento){
    if (evento.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value)
    }
})

function limpaInput() {
    inputNovaTarefa.value = ''
    inputNovaTarefa.focus()
}

function criaBotaoApagar(li)  { //preciso receber um li pra saber onde vou adicionar o botão
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnAddTarefa.addEventListener('click', function(evento){
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value)
})

document.addEventListener('click', function(e){ //capturo o evento pra saber onde na minha pagina está sendo clicado
    const elemento = e.target

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto =  tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // o trim não deixa espaços em branco.
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON) // local no navegador onde posso salvar coisas
    
}

function carregarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

carregarTarefasSalvas()