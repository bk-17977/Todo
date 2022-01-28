var inputs = document.querySelectorAll("input[type='checkbox']");
var addBtn = document.getElementById("addTaskBtn");
var taskInput = document.getElementById("taskInputForm");
var deleteElement = document.querySelectorAll(".bi-trash-fill");

const addCheckboxEvent = (inp) => {
	inp.addEventListener("click", (e) => {
		var label = document.querySelector("label[for='" + e.target.id + "']");
		if (e.target.checked) {
			label.style.textDecoration = "line-through";
		} else {
			label.style.textDecoration = "";
		}
	})
}

const addDeleteBtnEvent = (btn) => {
	btn.addEventListener('click', () => {
		btn.closest(".form-check").remove();
	})
}

inputs.forEach((inp) => {
	addCheckboxEvent(inp);
})

deleteElement.forEach((ico) => {
	addDeleteBtnEvent(ico);
})

addBtn.addEventListener('click', (e) => {
	addBtn.style.display = 'none';
	taskInput.style.display = 'block';
	taskInput.focus();
})
taskInput.addEventListener('focusout', (e) => {
	taskInput.style.display = 'none';
	addBtn.style.display = 'block';
})

taskInput.addEventListener('keypress', (e) => {
	if (e.keyCode == 13) {
		var id = "task" + (document.querySelectorAll("input[type='checkbox']").length + 1);
		var createElement = document.createElement('div');
		var data = `<input type="checkbox" class="form-check-input" id="${id}"/>
									<label class="form-check-label" for="${id}">${taskInput.value}</label>
									<i class="bi bi-trash-fill float-end"></i>`;

		createElement.classList = "form-check task";
		createElement.innerHTML = data;

		document.querySelector(".todoList").prepend(createElement);

		taskInput.value = "";

		addCheckboxEvent(document.getElementById(id));
	}
})