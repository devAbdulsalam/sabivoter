"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { navLinks } from "../../../Data";
// import { getData } from "../../../../utils/AxiosApis";

const newcandidate = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedFile, setSelectedFile] = useState("");
	const [selectedFileName, setSelectedFileName] = useState("");
	// //textFeilds
	const [name, setName] = useState("");
	const [election, setElection] = useState("");
	const [party, setParty] = useState("");
	const [profile, setProfile] = useState("");
	const [option, setOptions] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/elections")
			.then((res) => setOptions(res.data))
			.catch((error) => {
				console.log(error.message);
				console.log(error?.response?.data?.error);
			});
		console.log(option);
	}, []);

	const handleUpload = async (e) => {
		setIsLoading(true);
		try {
			if (!selectedFile || name === "" || election === "" || party === "") {
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
			formData.append("name", name);
			formData.append("election", election);
			formData.append("party", party);
			const data = await axios.post(`${baseurl}/candidate`, formData);
			console.log(data);
			setIsLoading(false);
			setIsError(null);
			setSuccess("Candidate added successfully");
			setTimeout(() => {
				setSuccess(null);
				setElection("");
				setName("");
				setParty("");
				setSelectedFile("");
				setSelectedFileName("");
			}, 2000);
		} catch (error) {
			console.log(error);
			console.log(error.response?.data?.error);
			toast.error("Network error !", { position: "top-right" });
			setIsError(
				error.response?.data?.error || error?.message || "Network error"
			);
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
			<div className="shadow-lg rounded-md bg-gray-50 p-4">
				<div className="w-full flex flex-col md:flex-row justify-center items-center">
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
								onChange={(e) => setName(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={name}
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
								onChange={(e) => setParty(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={party}
								placeholder="Nigeria People's Party"
								id="party"
								name="party"
								autoComplete="text"
							></input>
						</div>
						<div className="mt-1">
							<label htmlFor="electionname" className="text-lg font-semibold">
								Election Name:
							</label>
							<select
								onChange={(e) => setElection(e.target.value)}
								value={election}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							>
								{navLinks.map((item, idx) => {
									return (
										<option key={idx} value={item.name}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="mb-1 w-full">
					<label htmlFor="Profile" className="text-lg font-semibold">
						Candidate Profile:
					</label>
					<input
						onChange={(e) => setProfile(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						value={profile}
						placeholder="candidate political background"
						id="Profile"
						name="Profile"
						autoComplete="text"
					></input>
				</div>
				<div className="w-full px-2">
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
					className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 px-2 md:px-4 rounded font-semibold text-lg"
					disabled={isLoading}
				>
					{isLoading ? "Loading..." : "Add Candidate"}
				</button>
			</div>
		</div>
	);
};

export default newcandidate;
