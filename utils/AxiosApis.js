import axios from "axios";
import { baseurl } from "./config";

export const getData = async (url) => {
	let { data } = await axios(`${baseurl}/${url}`, { withCredentials: true });
	if (!data) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return data;
};

export const postData = async ({ url, data, accessToken }) => {
	const { response } = await axios.post(url, data, {
		headers: {
			"Content-Type": "application/json",
			authorization: `bearer ${accessToken}`,
			withCredentials: true,
		},
	});
	if (!response) {
		throw new Error("Failed to post data");
	}
	return response;
};
