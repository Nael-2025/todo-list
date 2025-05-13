const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-tasks') 

let minhaListadeItens = []

function AdicionarNovatarefa(){
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''
    MostraTarefa()
}

function MostraTarefa(){
   let NovaLi = ''

    minhaListadeItens.forEach((item, posicao ) => {
        NovaLi = NovaLi +
         `
        
            <li class= " task ${item.concluida && 'done'}">
              <img src="img/checked.png" alt="check-na-tarefa" onclick = "concluirTarefa(${posicao})">
              <p>${item.tarefa}</p>
              <img src="img/trash.png" alt="tarefa-para-lixo" onclick ="deletarItem(${posicao})">
            </li>
            
            `
    })

    ListaCompleta.innerHTML  = NovaLi
    localStorage.setItem('lista', JSON.stringify(minhaListadeItens))
}

function concluirTarefa(posicao){
    minhaListadeItens[posicao].concluida = !minhaListadeItens[posicao].concluida

     MostraTarefa()
}

function deletarItem(posicao){
     minhaListadeItens.splice(posicao, 1)
     MostraTarefa()
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista')

  if (tarefasDoLocalStorage) {
    minhaListadeItens = JSON.parse(tarefasDoLocalStorage)
     MostraTarefa()
  }

  
}

recarregarTarefas()

button.addEventListener('click', AdicionarNovatarefa)