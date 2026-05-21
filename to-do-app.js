function toDOList() {
  let addNewTask = document.getElementById("tasks").value;

  // create the list so the user sees the text on the screen
  let newTask = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.textContent = addNewTask;

  // create the delete btn so that a task can be deleted
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";

  // When the user clicks the delet btn, delete the task
  // .onclick is not a function, instead it is equal to a function
  deleteBtn.onclick = function () {
    newTask.remove();
    updateCount(); // Update the task count after deleting a task
  };

  // When the user completes a task, it strikes through
  let completeTask = document.createElement("button");
  completeTask.textContent = "⬜";

  // When the user completes a task
  completeTask.onclick = function () {
    newTask.classList.toggle("completed");

    if (newTask.classList.contains("completed")) {
      completeTask.textContent = "✅";
    } else {
      completeTask.textContent = "⬜";
    }

    updateCount(); // Update the task count after completeing a task
  };

  newTask.appendChild(completeTask); // complete button first
  newTask.appendChild(taskText); // text second
  newTask.appendChild(deleteBtn); // then delete button
  document.getElementById("userTasks").appendChild(newTask); //This is the list into which all other things will come into

  // Update the tasks count
  updateCount();

  // Reseting the input area
  document.getElementById("tasks").value = "";
}

const userClicks = document
  .getElementById("addBtn")
  .addEventListener("click", toDOList);

// Getting the number of tasks on the screen
function updateCount() {
  let allTasks = document.getElementById("userTasks").children.length;
  let completedTasks = document.querySelectorAll(".completed").length;
  let remaining = allTasks - completedTasks;
  document.getElementById("taskNumber").textContent =
    remaining + " tasks remaining";
}
