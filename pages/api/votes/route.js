// import { NextResponse } from "next/server";
export async function GET() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const post = await res.json();
	return Response.json({ post });
}
export async function POST({ data }) {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({ data }),
		headers: {
			"Content-type": "application/json",
		},
	});
	const post = await res.json();
	return Response.json({ post });
}
