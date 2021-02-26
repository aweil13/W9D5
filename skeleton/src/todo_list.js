const todos = [];

const ulTodos = document.querySelector('.todos');
const formTodos = document.querySelector('.add-todo-form');

const addTodos = (e) => {
    e.preventDefault();
    const inputTodo = document.querySelector('input[name="add-todo"]');
    const inputVal = inputTodo.value;
    inputTodo.value = "";

    const todo = {
        inputVal,
        done: false
    }

    todos.push(todo)
}