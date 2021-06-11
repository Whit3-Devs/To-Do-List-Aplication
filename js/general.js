const $input_todo = document.getElementById("input-todo");
const $list_todo = document.getElementById("list-todo");
let contador = 0;
let arrayItem_list = [];

const agregarItems = document
  .getElementById("btn-todo")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let texto = $input_todo.value;
    if (texto != "" && texto != " ") {
      const item_list = crearItem(contador, texto);

      arrayItem_list.push(item_list);
      contador += 1;
      $input_todo.value = "";

      renderItems_list(arrayItem_list);

      // Añadir eventos al botón check y delete
      if (arrayItem_list.length > 0) {
        arrayItem_list.forEach((item) => {
          let item_id = item.id;

          const $itemChequeado = document
            .getElementById(`${item_id}`)
            .addEventListener("click", (e) => {
              console.log("viendo como encarar");
            });
        });
      }
    }
  });

$list_todo.addEventListener("change", () => {
  // console.log($list_todo.children);
});
