"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Page() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [NIN, setNIN] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");

	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const { router } = useRouter();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const user = { name, email, NIN, password, password2, state, country };
		setIsLoading(true);
		if (
			!name === "" ||
			!email === "" ||
			!NIN == "" ||
			!password ||
			!password2 ||
			!state === "" ||
			!country === ""
		) {
			setIsError(null);
			axios
				.post("https://vote-me.cyclic.app/api/v1/register", user)
				.then((res) => res.data)
				.then((data) => {
					setSuccess(data?.msg);
					setIsLoading(false);
					setTimeout(() => {
						router.push("/signin");
					}, 500);
				})
				.catch((error) => {
					setIsError(error?.response?.data?.msg || error?.message);
					setIsLoading(false);
				});
		} else {
			setIsError("all inputs are required");
			setIsLoading(false);
		}
	};
	return (
		<form
			onSubmit={handleSignUp}
			className="w-full md:max-w-[450px] mx-auto flex flex-col p-px"
		>
			<div className="my-1">
				<label htmlFor="name" className="text-lg font-semibold">
					Full Name:
				</label>
				<input
					onChange={(e) => setName(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text"
					value={name}
					placeholder="Adekunle Bala Chukwueze"
					id="name"
					name="name"
					autoComplete="text"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="email" className="text-lg font-semibold">
					Email:
				</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="email"
					id="email"
					name="email"
					placeholder="abc@gmail.com"
					autoComplete="email"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="nin" className="text-lg font-semibold">
					NIN:
				</label>
				<input
					value={NIN}
					onChange={(e) => setNIN(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="tel"
					id="nin"
					name="nin"
					placeholder="123 456 7890"
					autoComplete="nin"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="state" className="text-lg font-semibold">
					State:
				</label>
				<input
					value={state}
					onChange={(e) => setState(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text"
					id="state"
					name="state"
					placeholder="Kano"
					autoComplete="state"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="country" className="text-lg font-semibold">
					Country:
				</label>
				<input
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text"
					id="country"
					name="country"
					placeholder="Nigeria"
					autoComplete="country"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="password" className="text-lg font-semibold">
					Password:
				</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="px-3 my-1 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="password"
					placeholder="Uni9ue&$tr0ng"
					id="password"
					name="password"
					autoComplete="new-password"
				/>
			</div>
			<div className="my-1">
				<label htmlFor="cpswd" className="text-xl font-semibold">
					Confirm Password:
				</label>
				<input
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="password"
					name="cpswd"
					id="cpswd"
					placeholder="Uni9ue&$tr0ng"
					autoComplete="new-password"
				/>
			</div>
			<div>
				<button
					className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 rounded font-bold"
					disabled={isLoading}
				>
					{isLoading ? "Signing up..." : "Sign up"}
				</button>
				{error && (
					<div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">
						{error}
					</div>
				)}
				{success && (
					<div className="success duration-500 p-2 bg-green-300 text-green-800 text-center text-lg border-green-700 border-2 rounded-md">
						{success}
					</div>
				)}
				<p className="py-4 text-gray-600">
					Already have an Account?
					<Link href="/signin" className="text-green-700 cursor-pointer">
						{" "}
						Login
					</Link>
				</p>
			</div>
		</form>
	);
}
