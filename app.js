let idCount = 1;

document.getElementById("inp").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const todos = document.getElementById("todos");
    const inpVal = document.getElementById("inp");

    if (inpVal.value.trim() === "") return alert("Please enter a todo");

    const element = document.createElement("div");
    element.setAttribute("id", idCount);
    element.setAttribute("class", "todo");

    element.innerHTML = `
        <p>${inpVal.value}</p>
        <button class="deleteBtn" onclick="deleteTodo(${idCount})">Delete</button>
        <button class="updateBtn" onclick="updateTodo(${idCount})">Update</button>
    `;

    todos.appendChild(element);
    inpVal.value = "";
    idCount++;
}

function deleteTodo(id) {
    const deletedItem = document.getElementById(id);
    deletedItem.remove();
}

function updateTodo(id) {
    const inpVal = document.getElementById("inp");
    const todoItem = document.getElementById(id).querySelector("p");

    if (inpVal.value.trim() === "") return alert("Please enter a todo to update");

    todoItem.textContent = inpVal.value;
    inpVal.value = "";
}

