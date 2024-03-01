const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const formSearch = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit',event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if(inputValue.length){
        todosContainer.innerHTML += `
           <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${inputValue}</span>
             <i class="far fa-trash-alt delete"></i>
           </li>
      `
    }
    
      event.target.reset()
})

todosContainer.addEventListener('click',event => {
    const clickTarget = event.target
    if(Array.from(clickTarget.classList).includes('delete')){
        clickTarget.parentElement.remove()
    }
})

formSearch.addEventListener('input',event => {
  const valueInput = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(valueInput))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
    Array.from(todosContainer.children)
      .filter(todo => todo.textContent.toLowerCase().includes(valueInput))
      .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
})