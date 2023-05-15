'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
// import { getData } from "../../../../utils/AxiosApis";

const newparty = ({ params }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	// image
	const [selectedImage, setSelectedImage] = useState('');
	const [selectedFile, setSelectedFile] = useState('');
	const [selectedFileName, setSelectedFileName] = useState('');
	// //textFeilds
	const [party, setParty] = useState('');
	const [motto, setMotto] = useState('');
	const [info, setInfo] = useState('');

	const handleUpload = async (e) => {
		setIsLoading(true);
		try {
			if (!selectedFile) {
				setIsError('Party logo/image is required!');
				toast.error('Party logo/image is required!');
				setIsLoading(false);
				setTimeout(() => {
					setIsError(null);
				}, 1000);
				return;
			}
			if (party === '') {
				setIsError('Party name is required!');
				toast.error('Party name is required!');
				setIsLoading(false);
				setTimeout(() => {
					setIsError(null);
				}, 1000);
				return;
			}
			const formData = new FormData();
			formData.append('image', selectedFile);
			formData.append('party', party);
			formData.append('info', info);
			formData.append('motto', motto);
			const data = await axios.post(`/api/party`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log(data);
			setIsLoading(false);
			setIsError(null);
			setSuccess('Party added successfully');
			setTimeout(() => {
				setSuccess(null);
				setParty('');
				setMotto('');
				setInfo('');
				setSelectedFile('');
				setSelectedImage('');
				setSelectedFileName('');
			}, 2000);
		} catch (error) {
			console.log(error);
			toast.error(`${error.response?.data?.error || 'Network error !'}`, {
				position: 'top-right',
			});
			// setIsError(
			// 	error.response?.data?.error || error?.message || 'Network error'
			// );
			setTimeout(() => {
				setIsError(null);
			}, 2000);
		}
		setIsLoading(false);
	};
	return (
		<div className="w-full p-20 mt-10 flex flex-col justify-center items-center space-x-2 h-[100%] bg-white">
			<Toaster />
			<h2 className="my-4 mx-auto text-2xl text-green-500">
				Add Political Party
			</h2>
			<div className="shadow-lg rounded-md bg-gray-50 p-4">
				<div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center">
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
								''
							)}
						</label>
					</div>
					{/* textfields */}
					<div className="">
						<div className="mt-1">
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
						<div className="my-1">
							<label
								htmlFor="motto"
								className="text-lg font-semibold whitespace-nowrap"
							>
								Party motto:
							</label>
							<input
								onChange={(e) => setMotto(e.target.value)}
								className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="text"
								value={motto}
								placeholder="Abdulsalam Chima Ademolekun"
								id="motto"
								name="motto"
								autoComplete="text"
							></input>
						</div>
					</div>
				</div>
				<div className="mb-1 w-full">
					<label
						htmlFor="info"
						className="text-lg font-semibold whitespace-nowrap"
					>
						Party Information:
					</label>
					<input
						onChange={(e) => setInfo(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						value={info}
						placeholder="Political party infomation"
						id="info"
						name="info"
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
					{isLoading ? 'Loading...' : 'Add Party'}
				</button>
			</div>
		</div>
	);
};

export default newparty;
