const $input_todo = document.getElementById("input-todo");
const $list_todo = document.getElementById("list-todo");
let contador = 0;
let arrayItem_list = [];

let datosItems = {
  arrayItem_list: [],
  arrayCheck: [],
  arrayDelete: [],
};

const agregarItems = document
  .getElementById("btn-todo")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let texto = $input_todo.value;
    if (texto != "" && texto != " ") {
      const item_list = crearItem(contador, texto);

      datosItems.arrayItem_list.push(item_list);
      contador += 1;
      $input_todo.value = "";

      renderItems_list(datosItems.arrayItem_list);

      //  Botón Check
      const check_itemId = item_list.lastChild.firstElementChild.id;

      const $itemChequeado = document
        .getElementById(`${check_itemId}`)
        .addEventListener("click", (e) => {
          const item_paragraph = e.target.parentElement.previousElementSibling;
          const btn_check = e.target;
          if (item_paragraph.classList.contains("check")) {
            item_paragraph.classList.remove("check");
            btn_check.classList.remove("check-green");
            btn_check.classList.add("check-grey");
          } else {
            item_paragraph.classList.add("check");
            btn_check.classList.remove("check-grey");
            btn_check.classList.add("check-green");
          }
        });

      // Botón delete
      const delete_itemId = item_list.lastChild.lastElementChild.id;

      const $itemEliminado = document
        .getElementById(`${delete_itemId}`)
        .addEventListener("click", (e) => {
          console.log(e.target);
        });
    }
  });

if (contador > 0) {
  datosItems.arrayItem_list.forEach((item) => {
    let item_id = item.id;
  });
}

$list_todo.addEventListener("change", () => {
  // console.log($list_todo.children);
});
