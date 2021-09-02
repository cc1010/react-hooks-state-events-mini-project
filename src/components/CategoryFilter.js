import React, { useState } from "react";

function CategoryFilter({ catagories }) {
	//console.log(catagories);
	const [useSelected, setSelected] = useState("");

	function handleState(e) {
		console.log(e.target.value);
		//setSelected(!useSelected);
		e.target.className = "selected";
	}

	const renderBtn = catagories.map((catagory, index) => {
		return (
			<button
				key={index}
				onClick={handleState}
				value={catagory}
				className={""}
			>
				{catagory}
			</button>
		);
	});
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{renderBtn}
		</div>
	);
}

export default CategoryFilter;
