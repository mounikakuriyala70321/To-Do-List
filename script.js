    document.addEventListener("DOMContentLoaded", () => {
        const todoInput = document.getElementById("todo-input");
        const addButton = document.getElementById("add-btn");
        const todoList = document.getElementById("todo-list");
    
        // Function to add a new task
        const addTask = () => {
        const taskText = todoInput.value.trim();
    
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
    
        const li = document.createElement("li");
        li.className = "todo-item";
    
        const span = document.createElement("span");
        span.textContent = taskText;
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => li.remove());
    
        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    
        todoInput.value = "";
        };
    
        // Event listener for the "Add" button
        addButton.addEventListener("click", addTask);
    
        // Add task on pressing Enter
        todoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
        });
    });
    