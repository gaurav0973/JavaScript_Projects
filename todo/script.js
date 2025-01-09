document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");
  
    
    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    // Render tasks
    tasks.forEach((task) => renderTask(task));
  
    // Add task
    addTaskButton.addEventListener("click", () => {
      const taskText = todoInput.value.trim();
      if (taskText === "") 
        return;
  
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };

      tasks.push(newTask);
      saveTasks();
      renderTask(newTask);
      todoInput.value = "";
      console.log(tasks);
    });
  
    // Render task
    function renderTask(task) {

      const li = document.createElement("li");
      li.setAttribute("data-id", task.id);
      if (task.completed) li.classList.add("completed");
      li.innerHTML = `
      <span>${task.text}</span>
      <button>delete</button>
      `;

      // Toggle task completion
      li.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") 
            return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTasks();
      });
  

      // Delete task
      li.querySelector("button").addEventListener("click", (e) => {
        // stoppropegation is used to stop the event from bubbling up the DOM tree
        e.stopPropagation();
        tasks = tasks.filter((t) => t.id === task.id);
        li.remove();
        saveTasks();
      });
      
      // Append task to the list
      todoList.appendChild(li);
    }
  
    // Save tasks to local storage
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
  