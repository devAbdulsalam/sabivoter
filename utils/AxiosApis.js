import axios from 'axios';
import { cookies } from 'next/headers';

const baseUrl = 'http://localhost:3000/api/';

export const getData = async (url) => {
	let { data } = await axios(`${baseUrl}${url}`, { withCredentials: true });
	if (!data) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return data;
};
export const getSecuredData = async (url) => {
	const nextCookies = cookies();

	const nextAuthSessionToken = nextCookies.get('next-auth.session-token');

	let { data } = await axios.get(`${baseUrl}${url}`, {
		headers: {
			Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
		},
	});
	if (!data) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return data;
};

export const postData = async ({ url, data, accessToken }) => {
	const { response } = await axios.post(url, data, {
		headers: {
			'Content-Type': 'application/json',
			authorization: `bearer ${accessToken}`,
			withCredentials: true,
		},
	});
	if (!response) {
		throw new Error('Failed to post data');
	}
	return response;
};
