
const inputBox = document.getElementById('input_box')
const addBtn = document.getElementById('add_btn')
const deleteBtn = document.getElementById('delete_btn')


const addTask = () => {
    const testInputValue = inputBox.value.trim()

    if (testInputValue !== '') {
        const ulList = document.getElementById('Ul-list')
        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox"> ${testInputValue} <button class='delete-btn'>Delete</button>`
        ulList.appendChild(li)
        inputBox.value = '';
    } else {
        alert('please Add a Task')
    }

}


addBtn.addEventListener('click', (() => {
    addTask()
}))





const ul = document.getElementById('Ul-list')

ul.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('li').remove(); 
    }
});


const dltAll = () => {
    
    const cheaked = document.querySelectorAll('input[type=checkbox]:checked')
    cheaked.forEach(cheak => {
        const li = cheak.parentNode;
        li.parentNode.removeChild(li)
    })
}


deleteBtn.addEventListener('click',()=>{
    dltAll()
})




