"use client";

export default function GlobalError({ error, reset }) {
	return (
		<html>
			<body>
				<h2>Something went wrong!</h2>
				<p>{error}</p>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
