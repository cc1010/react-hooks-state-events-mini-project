import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
	const [useTasks, setTasks] = useState(tasks);

	function handleDelete(element) {
		//console.log(element);
		const updatedTasks = useTasks.filter((task) =>
			task.text !== element ? task : false
		);
		setTasks(updatedTasks);
	}
	console.log(useTasks);
	const renderTasks = useTasks.map((task, index) => {
		return (
			<Task
				key={index}
				text={task.text}
				catagory={task.catagory}
				handleDelete={handleDelete}
			/>
		);
	});

	return (
		<div className="tasks">
			{/* display a list of tasks using Task component */}
			{renderTasks}
		</div>
	);
}

export default TaskList;
