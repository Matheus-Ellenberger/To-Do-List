const inputNovaTarefa = document.getElementById('input');
const btnNovaTarefa = document.getElementById('btnAdd');
const listaTarefas = document.getElementById('listTodo');

inputNovaTarefa.addEventListener('keypress', (e) => {

    if (e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId()
        }
        adicionarTarefa(tarefa);
    }

});

btnNovaTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId()
    }
    adicionarTarefa(tarefa); 

});

function gerarId () {
    return Math.floor(Math.random() * 3000);
};

function adicionarTarefa(tarefa) {

    let li = criarTagLi(tarefa);
    listaTarefas.appendChild(li);
    inputNovaTarefa.value = "";

};

function criarTagLi (tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');
    
    let btnDelet = document.createElement('button')
    btnDelet.classList.add('btnAcao');
    btnDelet.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnDelet.setAttribute('onclick', `delet(${tarefa.id})`);

    let btnDone = document.createElement('button')
    btnDone.classList.add('btnAcao');
    btnDone.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    btnDone.setAttribute('onclick', `done(${tarefa.id})`);

    div.appendChild(btnDone);
    div.appendChild(btnDelet);

    li.appendChild(span);
    li.appendChild(div);
    return li;

};

function delet(idTarefa) {

    let confirmacao = window.confirm('Tem certeza que deseja excluir?')
    if (confirmacao) {
        let li = document.getElementById(`${idTarefa}`);
        if (li) {
            listaTarefas.removeChild(li);
        }
    }

};

function done(idTarefa) {

    let li = document.getElementById(`${idTarefa}`);
    if (li) {
        listaTarefas.removeChild(li); 
    }
};







