import React from "react";

function Task({ text, catagory, handleDelete }) {
	//console.log(task);
	return (
		<div className="task">
			<div className="label">{catagory}</div>
			<div className="text">{text}</div>
			<button className="delete" onClick={() => handleDelete(text)}>
				X
			</button>
		</div>
	);
}

export default Task;
