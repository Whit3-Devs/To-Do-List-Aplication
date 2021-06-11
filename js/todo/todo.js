function crearItem(contador, texto) {
  let list_element = document.createElement("li");

  list_element.setAttribute("id", `item-${contador}`);
  list_element.setAttribute("class", "list-element");

  const content_list = `
    <p id="paragraph-elementList" class="paragraph-elementList">${texto}</p>
    <span id="container-buttons" class="container-buttons">
      <button id="btn-check-${contador}" class="btn-check check-grey"></button>
      <button id="btn-remove-${contador}" class="btn-remove remove"></button>
    </span>`;

  list_element.innerHTML = content_list;

  return list_element;
}

function renderItems_list(array) {
  while ($list_todo.firstChild) {
    $list_todo.removeChild($list_todo.firstChild);
  }

  array.forEach((item) => {
    $list_todo.appendChild(item);
  });
}
