import React from "react";
const page = async () => {
	let res = await fetch(`http://localhost:3000/api/votes`);
	const data = await res.json();
	if (!res.ok) {
		console.log(error);
	}
	if (data) {
		console.log(data);
	}

	return <div>countvote page</div>;
};

export default page;
