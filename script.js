const input_todo = document.getElementById('input-todo')
const btn_todo = document.getElementById('btn-todo')

const list_todo = document.getElementById('list-todo')


btn_todo.addEventListener('click', (e) => {
  e.preventDefault()

  const list_element = document.createElement('li')
  list_element.setAttribute('id', 'list-element')
  list_element.setAttribute('class', 'list-element')
  list_element.innerText = input_todo.value
  if(list_element.textContent != '') list_todo.appendChild(list_element);
  input_todo.value = ''

})