'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
// import { getData } from "../../../../utils/AxiosApis";

const newcandidate = ({ params }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [selectedImage, setSelectedImage] = useState('');
	const [selectedFile, setSelectedFile] = useState('');
	const [selectedFileName, setSelectedFileName] = useState('');
	// //textFeilds
	const [name, setName] = useState('');
	const [election, setElection] = useState('');
	const [party, setParty] = useState('');
	const [profile, setProfile] = useState('');
	const [parties, setParties] = useState([]);
	useEffect(() => {
		setElection(params.election);
	}, [params]);

	useEffect(() => {
		axios
			.get('/api/political_parties')
			.then((res) => res.data)
			.then((data) => {
				setParties(data);
			})
			.catch((error) => {
				console.log(error.message);
				console.log(error?.response?.data?.error);
			});
	}, [params]);

	const handleElectionChange = (e) => {
		setElection(e.target.value);
	};

	const handlePartyChange = (e) => {
		setParty(e.target.value);
	};

	const handleUpload = async (e) => {
		setIsLoading(true);
		try {
			if (!selectedFile || name === '' || election === '' || party === '') {
				setIsError('All fields are required');
				toast.error('All fields are required!');
				setIsLoading(false);
				setTimeout(() => {
					setIsError(null);
				}, 1000);
				return;
			}
			const formData = new FormData();
			formData.append('image', selectedFile);
			formData.append('name', name);
			formData.append('election', election);
			formData.append('party', party);
			formData.append('profile', profile);
			const data = await axios.post(`/api/candidate`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log(data);
			setIsLoading(false);
			setIsError(null);
			setSuccess('Candidate added successfully');
			setTimeout(() => {
				setSuccess(null);
				setElection('');
				setName('');
				setParty('');
				setProfile('');
				setSelectedFile('');
				setSelectedImage('');
				setSelectedFileName('');
			}, 2000);
		} catch (error) {
			console.log(error);
			toast.error(`${error.response?.data?.error || 'Network error !'}`, {
				position: 'top-right',
			});
			setIsError(
				error.response?.data?.error || error?.message || 'Network error'
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
						<div className="my-1">
							<label
								htmlFor="name"
								className="text-lg font-semibold whitespace-nowrap"
							>
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
							<label htmlFor="electionname" className="text-lg font-semibold">
								Election Name:
							</label>
							<select
								onChange={handleElectionChange}
								value={election}
								className="px-3 my-1 py-1.5 text-base capitalize w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							>
								<option value={election} selected class="capitalize">
									{election}
								</option>
							</select>
						</div>
						<div className="my-1">
							<label htmlFor="party" className="text-lg font-semibold">
								Party Name:
							</label>
							<select
								onChange={handlePartyChange}
								value={party}
								className="px-3 my-1 py-1.5 text-base capitalize w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							>
								<option>-- Select Political Party ---</option>
								{parties?.map((item, idx) => {
									return (
										<option key={idx} value={item._id} class="capitalize">
											{item.party}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="mb-1 w-full">
					<label
						htmlFor="Profile"
						className="text-lg font-semibold whitespace-nowrap"
					>
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
					{isLoading ? 'Loading...' : 'Add Candidate'}
				</button>
			</div>
		</div>
	);
};

export default newcandidate;
