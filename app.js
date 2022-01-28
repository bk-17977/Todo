angular.module("todoApp", [])
	.controller('TodoListController', ($scope) => {
		$scope.title = "Todo App";

		$scope.todoList = [
			{ task: "Have 3 Lectures, 1 Lab", isCompleted: false },
			{ task: "Meeting at 5 O'clock", isCompleted: false },
			{ task: "Explore New Things", isCompleted: false },
			{ task: "Attend function on 28 Jan", isCompleted: false },
		];

		$scope.deleteTask = (taskId) => {
			$scope.todoList.splice(taskId, 1);
		}

		$scope.deleteAll = () => {
			$scope.todoList = [];
		}

		$scope.deleteCompleted = () => {
			$scope.todoList = $scope.todoList.filter(task => task.isCompleted == false);
		}

		$scope.addTask = (e) => {
			console.log("comming");

		}
	})