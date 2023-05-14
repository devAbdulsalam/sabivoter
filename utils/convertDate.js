const response = require('../response/response');

export const convertedDatetoString = (date) => {
	const dateObj = new Date(date);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const dateString = dateObj
		.toLocaleDateString('en-US', options)
		.replace(/(\d+)(th|nd|rd|st)/, '$1<sup>$2</sup>');

	return dateString;
};

export const checkExpired = (input) => {
	let msg = '';
	const newDate = new Date(input);
	const today = new Date();

	if (today > newDate) {
		msg = 'Expired';
	} else {
		msg = 'Running';
	}

	return response({ msg: msg });
};

