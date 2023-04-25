import { useState } from 'react';

function ElectionDropdown({ options }) {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

	return (
		<select
			value={selectedOption}
			onChange={handleOptionChange}
			className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
		>
			{options.map((option, idx) => (
				<option key={idx} value={option._id}>
					{option.electionName}
				</option>
			))}
		</select>
	);
}
