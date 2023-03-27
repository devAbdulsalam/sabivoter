import axios from "axios";

export const getData = async (url) => {
	let {data} = await axios((url),	{withCredentials: true});
	return data;
};

export const postData = async ({ url, data, accessToken}) => {
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
