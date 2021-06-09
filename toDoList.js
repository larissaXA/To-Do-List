var task = document.getElementById('task')
var list = document.getElementById('list')
var add = document.getElementById('add')
var clear = document.getElementById('clear')

add.addEventListener('click',adicionar)
clear.addEventListener('click',limpar)

function limpar(){
    if(window.confirm('Tem certeza que deseja apagar tudo?')){
        list.innerHTML = ""
    }
}
function adicionar(){
    if(task.value == ''){
        return alert("Você não inseriu nenhuma atividade!")
    }
    var op = document.createElement('div')
    var deleteButton = document.createElement('img')
    deleteButton.src = 'delete.png'
    var complete = document.createElement('img')
    complete.src = 'checked.png'
    op.innerHTML = task.value
    op.appendChild(deleteButton)
    op.appendChild(complete)
    complete.addEventListener('click',completeOp)
    
    function completeOp(){
        op.style.opacity = '.6'
        op.style.textDecoration = 'line-through'
        list.appendChild(op)
    }
    deleteButton.addEventListener('click',deleteOp)
    
    function deleteOp(){
        list.removeChild(op)
    
    }
    list.appendChild(op)
    task.value = ""
}