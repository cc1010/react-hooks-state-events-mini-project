import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [useSelected, setSelected] = useState("All");

	function handleFilter() {}

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				catagories={CATEGORIES}
				handleFilter={handleFilter}
			/>
			<NewTaskForm />
			<TaskList tasks={TASKS} />
		</div>
	);
}

export default App;
