async function callAPI() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  makeTodos(data);
}

function makeTodos(data) {
  const todos = document.getElementById('todos');
  for (i = 0; i < data.length; i++) {
    const todoData = data[i];
    const todo = makeTodo(todoData);
    todos.appendChild(todo);
  }
}

function makeTodo(todo) {
  const { id, title, completed } = todo;
  const todoContainer = document.createElement('div');
  todoContainer.className = 'todo-container';

  const idContainer = document.createElement('div');
  const idLabel = document.createElement('label');
  idLabel.innerText = 'ID: ' + id;
  idContainer.className = 'todo-id';
  idContainer.appendChild(idLabel);
  todoContainer.appendChild(idContainer);

  const titleEl = document.createElement('p');
  titleEl.innerText = title.charAt(0).toUpperCase() + title.substring(1);
  titleEl.className = 'todo-title';
  todoContainer.appendChild(titleEl);

  const statusEl = document.createElement('p');
  statusEl.className = 'todo-status';
  if (completed === true) {
    statusEl.className = statusEl.className + ' todo-status-completed';
    statusEl.innerText = 'Completed';
  } else {
    statusEl.innerText = 'Todo';
  }
  todoContainer.appendChild(statusEl);
  return todoContainer;
}

callAPI();
