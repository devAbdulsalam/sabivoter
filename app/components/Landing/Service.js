"use client";
import React, { useState } from "react";

const Service = ({ item }) => {
	const { id, name, description } = item;
	// const [readmore, setReadMore] = useState(false);

	return (
		<div key={id} className="flex flex-col items-center text-center">
			<div className="mb-8">
				{/* <img className='rounded-2xl' src={item.image} alt='' /> */}
			</div>
			{/* <p className='capitalize text-accent text-sm mb-3'>{item.category}</p> */}
			<h3 className="text-2xl font-semibold capitalize mb-3">{name}</h3>
			<p className="text-base max-w-md text-blue-600">{description}</p>
			{/* <p className="text-base max-w-md text-blue-600">
				{readmore ? description : `${description.substring(0, 10)}...`}
				<button
					className="text-green-500"
					onClick={() => setReadMore(!readmore)}
				>
					{readmore ? "show less" : "Read more"}
				</button>
			</p> */}
		</div>
	);
};

export default Service;
