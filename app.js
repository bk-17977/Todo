angular.module("todoApp", []).controller("TodoListController", ($scope) => {
	$scope.title = "Things to be done";
	$scope.todoList = [
		{ task: "Have 3 Lectures, 1 Lab", isCompleted: false },
		{ task: "Meeting at 5 O'clock", isCompleted: false },
		{ task: "Explore New Things", isCompleted: false },
		{ task: "Attend function on 28 Jan", isCompleted: false },
	];
	$scope.remaining = $scope.todoList.filter((task) => task.isCompleted == false).length;
	$scope.deleteTask = (taskId) => {
		$scope.todoList.splice(taskId, 1);
	};
	$scope.deleteAll = () => {
		$scope.todoList = [];
	};
	$scope.deleteCompleted = () => {
		$scope.todoList = $scope.todoList.filter((task) => task.isCompleted == false);
	};
	$scope.remaining = function () {
		var count = 0;
		angular.forEach($scope.todoList, (todo) => {
			count += todo.isCompleted ? 0 : 1;
		});
		if (count > 0) {
			if (count == 1) {
				return count + " task remaining out of " + $scope.todoList.length;
			} else {
				return count + " tasks remaining out of " + $scope.todoList.length;
			}
		} else {
			return "All tasks are done.";
		}
	};
	$scope.addTask = () => {
		var obj = { task: $scope.todoList.task, isCompleted: false };
		$scope.todoList.unshift(obj);
		$scope.todoList.task = "";
	};
});