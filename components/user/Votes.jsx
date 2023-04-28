import React from 'react';

const Votes = ({ votes }) => {
	return (
		<div>
			{votes?.map((item) => {
				return <div key={item?._id}>{item.election}</div>;
			})}
		</div>
	);
};

export default Votes;
