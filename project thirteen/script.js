const container = document.querySelector('.container')
const todoForm = document.querySelector('.todoForm')
const todoInput = document.querySelector('#todoInput')
const addBtn = document.querySelector('#addBtn')
const lists = document.getElementById('lists')
const msg = document.getElementById('msg')


// deleteTODO

function deleteTodo(e){
    const selettodo = e.target.closest('li');
    console.log(selettodo);
    
    lists.removeChild(selettodo)
    

    showMessage('todo is deleted', 'danger')

    let todos = getTodos()
    todos = todos.filter((todo)=>todo.uniqID !== selettodo.id)
    localStorage.setItem('mytodos',JSON.stringify(todos))
    
}


// showMessage

    function showMessage(text,status){
        msg.textContent = text
        msg.classList.add(`bg-${status}`)
        setTimeout(()=>{
            msg.textContent = ''
            msg.classList.remove(`bg-${status}`)
        },1000)
    }



// create todo 

function createTodo(id, value) {
    const todoElement = document.createElement('li')

    todoElement.id = id
    todoElement.classList.add('li_ele')
    todoElement.innerHTML = `
    
    <span>${value}</span>
    <span><button class='btn' id="dltBtn">dlt</button></span>
    
 
 `
    lists.appendChild(todoElement)


    const dltBtn = todoElement.querySelector('.btn')
    dltBtn.addEventListener('click',deleteTodo)
}
// getTodosfrom localstore

function getTodos(){
   return localStorage.getItem('mytodos') ? JSON.parse(localStorage.getItem('mytodos')) : []
}


// addTodo 
function addTOdo(e) {
    e.preventDefault()
    const todoValue = todoInput.value;



    // unique id 
    const uniqID = Date.now().toString();

    // createTOdo 
    createTodo(uniqID, todoValue)

    // show message
        showMessage('add todo', 'success')


    // todo adding localstore

    const todos = getTodos()

    todos.push({uniqID,todoValue})
    localStorage.setItem('mytodos',JSON.stringify(todos))

    todoInput.value = ''
}

// loadtodo

const loadTodo = () => {
    const todos = getTodos()
    todos.map((todo)=> createTodo(todo.uniqID,todo.todoValue))

}


// adding listener 
todoForm.addEventListener('submit', addTOdo)
window.addEventListener('DOMContentLoaded',loadTodo);


