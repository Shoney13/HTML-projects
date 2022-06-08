let todos = document.querySelectorAll(".todo-item");
let currStatus = document.querySelectorAll(".status");
const addTodo = document.querySelector("#add-task-button");
let draggableElement = null;

// Adding event listeners to the todos
function addEventListeners() {
	todos.forEach((todo) => {
		// Drag Start
		console.log(todo);
		todo.addEventListener("dragstart", () => {
			draggableElement = todo;
			todo.classList.add("dragging");
		});
		// Drag End
		todo.addEventListener("dragend", () => {
			draggableElement = null;
			todo.classList.remove("dragging");
			sortData();
			storeLocalStorage();
		});
	});

	currStatus.forEach((status) => {
		// Drag Over
		status.addEventListener("dragover", (e) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "move";
		});
		// Drop
		status.addEventListener("drop", (e) => {
			let currTarget = e;
			let currIdx = 0;
			while (currTarget.path[currIdx].className != "status") {
				currIdx++;
			}

			currTarget.path[currIdx]
				.querySelector(".status-tasks")
				.appendChild(draggableElement);
			sortData();
			storeLocalStorage()
		});
	});
}

// Adding event listeners to the add todo button
addTodo.addEventListener("click", (e) => {
	let newTaskName = document.querySelector("#new-task-name").value;
	let newTaskPriority = document.querySelector("#new-task-priority").value;
	if (newTaskName.length == 0) {
		return;
	}
	let newTask = document.createElement("div");
	newTask.classList.add("todo-item");
	newTask.draggable = true;
	newTask.innerHTML = `<div class="task-info">
	<span class="todo-task">${newTaskName}</span><br />
	<span data-priority="${newTaskPriority}" class="task-priority">Priority: ${getPriority(
		newTaskPriority
	)}</span>
</div>
<span class="close-todo" onclick="closeTodo(this)"><i class="fa-solid fa-2xl fa-xmark"></i></span>`;
	document.querySelector(".status-pending").appendChild(newTask);
	document.querySelector("#new-task-name").value = "";
	// Adding event listeners to the new todo tasks
	// Drag Start
	newTask.addEventListener("dragstart", () => {
		draggableElement = newTask;
		newTask.classList.add("dragging");
	});
	// Drag End
	newTask.addEventListener("dragend", () => {
		draggableElement = null;
		newTask.classList.remove("dragging");
	});
	// Sorting the todos
	sortData();
	storeLocalStorage();
});

// Getting the priority of the task
function getPriority(priority) {
	switch (priority) {
		case "1":
			return "high";
		case "2":
			return "medium";
		case "3":
			return "low";
	}
}
// comparing the priority of the tasks
function comparator(a, b) {
	if (a.dataset.priority < b.dataset.priority) return -1;
	if (a.dataset.priority > b.dataset.priority) return 1;
	return 0;
}

// function to sort the todos
function sortData() {
	document.querySelectorAll(".status-tasks").forEach((status) => {
		var indexes = status.querySelectorAll("[data-priority]");
		var indexesArray = Array.from(indexes);
		let sorted = indexesArray.sort(comparator);
		sorted.forEach((e) => {
			// console.log(e.parentNode.parentNode)
			status.appendChild(e.parentNode.parentNode);
		});
	});
}

sortData();

// Adding event listeners to the close todo button
// document.querySelectorAll(".close-todo").forEach((closeTodo) => {
// 	closeTodo.addEventListener("click", (e) => {
// 		e.target.parentNode.parentNode.remove();
// 	});
// });

function closeTodo(e) {
	e.parentNode.remove();
	storeLocalStorage();
}

// Local Storage

function storeLocalStorage() {
	let todos = document.querySelectorAll(".status-tasks");
	let todoArray = [];
	todos.forEach((todo) => {
		todoArray.push(todo.innerHTML);
	});
	localStorage.setItem("todo", JSON.stringify(todoArray));
}

(function getLocalStorage() {
	let prevTodos = document.querySelectorAll(".status-tasks");
	if (localStorage.getItem("todo") === null) return;
	let todoArray = JSON.parse(localStorage.getItem("todo"));
	prevTodos.forEach((todo, idx) => {
		if (todo) {
			todo.innerHTML = todoArray[idx];
		}
	});
	todos = document.querySelectorAll(".todo-item");
	currStatus = document.querySelectorAll(".status");
	addEventListeners();
})();

addEventListeners();