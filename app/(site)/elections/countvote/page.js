import React from "react";
import { cookies } from "next/headers";

const page = async () => {
	const cookieStore = cookies();
	const token = cookieStore.get("next-auth.session-token");
	let res = await fetch(`https://vote-me.cyclic.app/api/v1/user/count`, {
		method: "Get",
		headers: {
			authorization: `bearer ${token}`,
			cookie: req.header.cookie,
		},
	});
	const data = await res.json();

	if (data) {
		console.log(data);
	}

	return <div>page</div>;
};

export default page;
