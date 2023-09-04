const input = document.querySelector("#val");
const ol = document.querySelector("ol");

let todo = [];
function addTodo(e) {
  e.preventDefault();
  ol.innerHTML = "";
  todo.push(input.value);
  console.log(todo);
  for (let i = 0; i < todo.length; i++) {
    ol.innerHTML =
      ol.innerHTML +
      `<li>${todo[i]}</li>
      <button onclick='deleteTodo(${i})'>Delete</button>
      <button onclick='editTodo(${i})'>Edit</button>`;
    if (input.value == "") {
      alert("Enter a val first");
    }
  }
}

function deleteTodo(index) {
  ol.innerHTML = "";
  todo.splice(index, 1);
  for (let i = 0; i < todo.length; i++) {
    ol.innerHTML =
      ol.innerHTML +
      `<li>${todo[i]}</li>
    <button onclick='deleteTodo(${i})'>Delete</button>
    <button onclick='editTodo(${i})'>Edit</button>`;
  }
}
function editTodo(index) {
  ol.innerHTML = "";
  let userValue = prompt("Enter New Val");
  todo.splice(index, 1, userValue);
  for (let i = 0; i < todo.length; i++) {
    ol.innerHTML =
      ol.innerHTML +
      `<li>${todo[i]}</li>
         <button onclick='deleteTodo(${i})'>Delete</button>
          <button onclick='editTodo(${i})'>Edit</button>`;
  }
  console.log(todo);
}
