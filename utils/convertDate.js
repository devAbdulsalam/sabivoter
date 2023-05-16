
export const convertedDatetoString = (date) => {
	const dateObj = new Date(date);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const dateString = dateObj
		.toLocaleDateString('en-US', options)
		.replace(/(\d+)(th|nd|rd|st)/, '$1<sup>$2</sup>');

	return dateString;
};

export const checkExpired = (input) => {
	let status = '';
	const newDate = new Date(input);
	const today = new Date();

	if (today > newDate) {
		status = 'Expired';
	} else {
		status = 'Running';
	}

	return  status;
};

