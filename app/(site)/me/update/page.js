'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getError } from '@/utils/error';
import axios from 'axios';
import Hero from '@/public/assets/avatar.png';

const UpdateProfile = () => {
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [avatar, setAvatar] = useState('');
	const [avatarPreview, setAvatarPreview] = useState('/images/default.png');

	useEffect(() => {
		setName(session?.user?.name);
		setEmail(session?.user?.email);
	}, [session]);

	const handleSubmit = async () => {
		e.preventDefault();
		try {
			setLoading(true);
			const result = await axios.put('/api/auth/update', {
				name,
				email,
				password,
			});
			// const result = await signIn('credentials', {
			// 	redirect: false,
			// 	email,
			// 	password,
			// });
			console.log(result);
			setLoading(false);
			toast.success('Profile updated successfully');
			if (result.error) {
				toast.error(result.error);
			}
		} catch (err) {
			toast.error(getError(err));
		}
	};
	

	const submitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.set('name', name);
		formData.set('email', email);
		formData.set('image', avatar);

		updateProfile(formData);
	};

	const onChange = (e) => {
		const reader = new FileReader();

		reader.onload = () => {
			if (reader.readyState === 2) {
				setAvatarPreview(reader.result);
			}
		};

		setAvatar(e.target.files[0]);
		reader.readAsDataURL(e.target.files[0]);
	};
	return (
		<>
			<form onSubmit={handleSubmit} className="mx-auto max-w-screen-md">
				<h2 className="mb-5 text-2xl font-semibold">Update Profile</h2>

				<div className="mb-4">
					<label className="block mb-1"> Full Name </label>
					<input
						className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
						type="text"
						placeholder="Type your name"
						required
						value={name}
						
              onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-1"> Email </label>
					<input
						className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
						type="text"
						placeholder="Type your email"
						required
						value={email}
						
              onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-1"> Avatar </label>
					<div className="mb-4 flex flex-col md:flex-row">
						<div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
							<img className="w-14 h-14 rounded-full" src={Hero} />
						</div>
						<div className="md:w-2/3 lg:w-80">
							<input
								className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6"
								type="file"
								id="formFile"
								onChange={onChange}
							/>
						</div>
					</div>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
				>
					{loading ? 'Updating' : 'Update'}
				</button>
			</form>
		</>
	);
};

export default UpdateProfile;
