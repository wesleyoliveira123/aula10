const formulario = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")
const lista_de_tarefas = document.querySelector("#lista_de_tarefas")

const minha_lista = JSON.parse(localStorage.getItem("lista")) || []
minha_lista.forEach((tarefa,index)=>montar_tela(tarefa,index))

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()

  const nova_tarefa={
    nome:tarefa.value
  }
  minha_lista.push(nova_tarefa)
  localStorage.setItem("lista",JSON.stringify(minha_lista))
  montar_tela(nova_tarefa, minha_lista.length -1)

  formulario.reset()
  tarefa.focus()

})

function montar_tela(tarefa,index){
  const li = document.createElement("li")
  const nome = document.createElement("p")
  nome.classList.add("nome")
  const btn_excluir = document.createElement("button")
  const checkbox = document.createElement("input")

  nome.textContent=`Tarefa: ${tarefa.nome}`
  btn_excluir.textContent="Excluir"
  checkbox.type="checkbox"

  btn_excluir.addEventListener("click",()=>{
    minha_lista.splice(index,1)
    localStorage.setItem("lista",JSON.stringify(minha_lista))
    li.remove()
  })

  checkbox.addEventListener("change",()=>{
    if (checkbox.checked){
      nome.style.textDecoration="line-through"
    } else{
      nome.style.textDecoration="none"
    }
  })

li.append(nome,btn_excluir,checkbox)
lista_de_tarefas.append(li)

}