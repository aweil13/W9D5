const todos = JSON.parse(localStorage.getItem('todos')) || [];


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
    populateList(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const populateList = (arr) => {
    arr.forEach((ele, i) => {
        const label = document.createElement('label');
        label.textContent = ele.inputVal;
        const input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.setAttribute("data-idx", `${i}` )
        if (ele.done) {
            input.checked = true;
        }
        label.appendChild(input);
        const li = document.createElement("li");
        li.appendChild(label);
        document.querySelector(".todos").appendChild(li);
    });
} 

const toggleCheck = (e) => {
    const element = e.target;
    const index = element.dataset.idx;
    console.log(index)
    todos[index].done = !todos[index].done;
    localStorage.setItem('todos', JSON.stringify(todos));
    // populateList(todos);
}


formTodos.addEventListener('submit', addTodos);
ulTodos.addEventListener('click', toggleCheck);
populateList(todos);