let add = document.querySelector(".addTask");
let unOrderList = document.querySelector(".todo");

// Add new task on button click
add.addEventListener("click", () => {
  let task = prompt("Enter Task");
  if (task) {
    let newTask = document.createElement("li");
    newTask.classList.add("task");

    newTask.innerHTML = `
      ${task}
      <div>
        <button class="updateTask">Update Task</button>
        <button class="deleteTask">Delete Task</button>
      </div>
    `;

    unOrderList.appendChild(newTask);
  }
});

unOrderList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteTask")) {
    let taskToRemove = event.target.closest(".task");
    unOrderList.removeChild(taskToRemove);
  }

  if (event.target.classList.contains("updateTask")) {
    let taskToUpdate = event.target.closest(".task");
    let currentText = taskToUpdate.childNodes[0].nodeValue.trim();
    const updatedText = prompt("Update Task", currentText);
    if (updatedText) {
      taskToUpdate.childNodes[0].nodeValue = updatedText + " ";
    }
  }
});
