import React from "react";
import ReactDOM from "react-dom";

// Resources
import "bootstrap";
import "../styles/index.css";

// Components
import TaskList from "./component/TaskList.js";
import TaskListPlaceHolder from "./component/TasksListPlaceHolder.js";
import Task from "./component/Task.js";

// Logic
ReactDOM.render(
	<TaskList
		inputPlaceHolder="Nueva tarea..."
		listPlaceHolder={TaskListPlaceHolder}
		taskComponent={Task}
	/>,
	document.querySelector("#app")
);
