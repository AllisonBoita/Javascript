const inputNovaTarefa = document.querySelector('.input-nova-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')


function criarLi() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) {
    const li = criarLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
}

btnAddTarefa.addEventListener('click', function(evento){
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value)
})