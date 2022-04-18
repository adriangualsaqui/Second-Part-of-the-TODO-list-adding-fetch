import React, { useState } from "react";
import PropTypes from "prop-types";

// Resources
import "../../styles/TaskList.css";

// Component

const TaskList = (props) => {
	const [inputVal, setInputVal] = useState("");
	const [tasksList, setTasksList] = useState([]);

	function addTask() {
		setTasksList([...tasksList, inputVal]);
		setInputVal("");
	}

	function keyHandlers(ev) {
		if (ev.key === "Enter") addTask();
	}

	function removeTask(taskIndex) {
		setTasksList(tasksList.filter((task, idx) => idx !== taskIndex));
	}

	return (
		<div className="container wrapper  m-3">
			<input
				className="rounded-3 me-3"
				type="text"
				placeholder={props.inputPlaceHolder}
				value={inputVal}
				onChange={(ev) => {
					setInputVal(ev.target.value);
				}}
				onKeyPress={(ev) => {
					keyHandlers(ev);
				}}
			/>
			<button
				className="rounded-3"
				onClick={() => {
					addTask();
				}}>
				+
			</button>
			<ul className="p-5  my-3 rounded-3">
				{tasksList.length
					? tasksList.map((task, idx) =>
							React.cloneElement(
								props.taskComponent({
									description: task,
									removeHandler: () => {
										removeTask(idx);
									},
								}),
								{ key: idx }
							)
					  )
					: props.listPlaceHolder()}
			</ul>
			<p>{tasksList.length} items</p>
		</div>
	);
};

TaskList.propTypes = {
	inputPlaceHolder: PropTypes.string, // Text for show in input when it's empty.
	taskComponent: PropTypes.elementType.isRequired, // Component for each task.
	listPlaceHolder: PropTypes.elementType.isRequired, // Component rendered when it's no tasks.
};

export default TaskList;
