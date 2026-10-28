const todoInput = document.getElementById("todoInput");
const numberInput = document.getElementById("numberInput");
const list = document.getElementById("list");
const message = document.getElementById("message");

const todos = ["📚 Гэрийн даалгавар", "⚽ Бөмбөг тоглох", "📖 Ном унших"];

function showTodos() {
  if (todos.length === 0) {
    list.textContent = "🎉 Бүх ажил дууслаа!";
  } else {
    let text = "";
    for (let i = 0; i < todos.length; i++) {
      text = text + `${i + 1}. ${todos[i]}\n`;
    }
    list.textContent = text;
  }
}

function addTodo() {
  const todo = todoInput.value.trim();
  if (todo === "") {
    message.textContent = "✏️ Юу хийхээ бич";
  } else if (todos.includes(todo)) {
    message.textContent = `⚠️ «${todo}» аль хэдийн байна`;
  } else {
    todos.push(todo);
    message.textContent = `✅ Нэмэгдлээ: ${todo}`;
    todoInput.value = "";
  }
  showTodos();
}

function removeTodo(i) {
  const todo = todos[i];
  if (confirm(`Устгах уу: «${todo}»?`)) {
    todos.splice(i, 1);
    message.textContent = `🗑 Устгалаа: ${todo}`;
  } else {
    message.textContent = "↩️ Цуцаллаа";
  }
  showTodos();
}

function removeByNumber() {
  const i = Number(numberInput.value) - 1;
  if (i >= 0 && i < todos.length) {
    removeTodo(i);
  } else {
    message.textContent = "⚠️ Ийм дугаартай ажил алга";
  }
  numberInput.value = "";
}

showTodos();
