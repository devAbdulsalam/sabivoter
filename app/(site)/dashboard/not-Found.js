import Link from "next/link";
export default function NotFound() {
	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1 className="text-2xl font-semibold py-2">Oooops...</h1>
			<h3 className="text-2xl my-2 font-bold">Page Not Found.</h3>
			<p className="text-xl font-semibold">
				Go back to the<Link href="/">Homepage</Link>
			</p>
		</div>
	);
}
