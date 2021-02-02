const input_todo = document.getElementById('input-todo')
const btn_todo = document.getElementById('btn-todo')

const list_todo = document.getElementById('list-todo')



btn_todo.addEventListener('click', (e) => {
  e.preventDefault()

  const list_element = document.createElement('li')
  list_element.setAttribute('id', 'list-element')
  list_element.setAttribute('class', 'list-element')
  const text_input = input_todo.value
  list_element.textContent = text_input
  const checkbox_element = document.createElement('input')
  checkbox_element.setAttribute('type', 'checkbox')
  checkbox_element.setAttribute('id', 'checkbox-element')
  checkbox_element.setAttribute('class', 'checkbox-element')
  checkbox_element.setAttribute('value', 'check')
  list_element.appendChild(checkbox_element)
  
  if(list_element.textContent != '') {
    list_todo.appendChild(list_element)
  }

  input_todo.value = ''
})

list_todo.addEventListener('change', (e) => {
  const checked = e.target.checked
  const list_element = e.target.parentNode

  if(checked) list_element.classList.add('check');
  else list_element.classList.remove('check');
})