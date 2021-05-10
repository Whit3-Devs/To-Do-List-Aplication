const input_todo = document.getElementById('input-todo')
const btn_todo = document.getElementById('btn-todo')

const list_todo = document.getElementById('list-todo')

let contador = 0


btn_todo.addEventListener('click', (e) => {
  e.preventDefault()
  
  // Crear un li con su texto y checkbox para tachar los elementos terminados
  const list_element = document.createElement('li')
  list_element.setAttribute('id', 'list-element')
  list_element.setAttribute('class', 'list-element')
  list_element.textContent =input_todo.value
  const checkbox_element = document.createElement('input')
  checkbox_element.setAttribute('type', 'checkbox')
  checkbox_element.setAttribute('id', 'checkbox-element')
  checkbox_element.setAttribute('class', 'checkbox-element')
  checkbox_element.setAttribute('value', 'check')
  list_element.appendChild(checkbox_element)

  const btn_remove = document.createElement('button')
  btn_remove.setAttribute('id', 'btn-remove')
  btn_remove.setAttribute('class', 'btn-remove')
  list_element.appendChild(btn_remove)
  
  if(list_element.textContent != '') {
    list_todo.appendChild(list_element)
  }
  
  //sessionStorage.setItem()

  // Borrar el campo de texto del input
  input_todo.value = ''
  contador+=1;
})

list_todo.addEventListener('change', (e) => {
  const checked = e.target.checked
  const list_element = e.target.parentNode

  if(checked) list_element.classList.add('check');
  else list_element.classList.remove('check');
})