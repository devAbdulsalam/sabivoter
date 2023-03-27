"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const newcandidate = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState("");
	const [selectedFileName, setSelectedFileName] = useState("");
	// //textFeilds
	const [candidateName, setCandidateName] = useState("");
	const [electionName, setElectionName] = useState("");
	const [partyName, setPartyName] = useState("");

	const handleUpload = async (e) => {
		const user = { candidateName, electionName, partyName };
		setIsLoading(true);
		try {
			if (
				!selectedFile ||
				candidateName === "" ||
				electionName === "" ||
				partyName === ""
			) {
				setIsError("All fields are required");
				toast.error("All fields are required!");
				setIsLoading(false);
				setTimeout(() => {
					setIsError(null);
				}, 1000);
				return;
			}
			const formData = new FormData();
			formData.append("image", selectedFile);
			formData.append("data", JSON.stringify(user));
			const { data } = await axios.post(
				"https://vote-me.cyclic.app/api/v1/add",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						withCredentials: true,
					},
				}
			);

			console.log(data);
			setIsLoading(false);
			setIsError(null);
			setSuccess("Candidate added successfully");
		} catch (error) {
			console.log(error);
			console.log(error?.message);
			toast.error("Network error !", {position: "top-right"});
			setIsError(error.response?.data || error?.message || "Network error ");
			setTimeout(() => {
				setIsError(null);
			}, 2000);
		}
		setIsLoading(false);
	};
	return (
		<div className="w-full p-20 mt-10 flex flex-col justify-center items-center space-x-2 h-[100%] bg-white">
			<Toaster />
			<h2 className="my-4 mx-auto text-2xl text-green-500">Add Candidate</h2>
			<div className="mx-auto flex flex-col justify-center items-center space-x-2 shadow-lg rounded-md bg-gray-50">
				<div className="mx-auto p-10 flex flex-col md:flex-row justify-center items-center">
					<div className="max-w-4xl mx-auto p-20 space-y-20">
						<label htmlFor="image">
							<input
								id="image"
								type="file"
								hidden
								onChange={({ target }) => {
									if (target.files) {
										const file = target.files[0];
										setSelectedImage(URL.createObjectURL(file));
										setSelectedFile(file);
										setSelectedFileName(file?.name);
									}
								}}
							></input>
							<div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
								{selectedImage ? (
									<Image
										src={selectedImage}
										width="300"
										height="300"
										alt="candidate image"
									/>
								) : (
									<span>Select Image</span>
								)}
							</div>
							{selectedFile ? (
								<span className="text-xs font-semibold text-slate-900">
									{selectedFileName}
								</span>
							) : (
								""
							)}
						</label>
					</div>
					{/* textfields */}
					<div className="">
						<div className="my-1">
							<label htmlFor="name" className="text-lg font-semibold">
								Candidate Name:
							</label>
							<input
								onChange={(e) => setCandidateName(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={candidateName}
								placeholder="Abdulsalam Chima Ademolekun"
								id="name"
								name="name"
								autoComplete="text"
							></input>
						</div>
						<div className="my-1">
							<label htmlFor="party" className="text-lg font-semibold">
								Party Name:
							</label>
							<input
								onChange={(e) => setPartyName(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={partyName}
								placeholder="Nigeria People's Party"
								id="party"
								name="party"
								autoComplete="text"
							></input>
						</div>
						<div className="my-1">
							<label htmlFor="electionname" className="text-lg font-semibold">
								Election Name:
							</label>
							<input
								onChange={(e) => setElectionName(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={electionName}
								placeholder="Presidential Election"
								id="electionname"
								name="electionname"
								autoComplete="text"
							></input>
						</div>
					</div>
				</div>
				<div className="w-full p-2">
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
				</div>
			</div>
			<div className="max-w-3xl mx-auto mt-2">
				<button
					onClick={handleUpload}
					className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 px-2 rounded font-semibold text-lg"
					disabled={isLoading}
				>
					{isLoading ? "Loading..." : "Add Candidate"}
				</button>
			</div>
			<>
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
			</>
		</div>
	);
};

export default newcandidate;
