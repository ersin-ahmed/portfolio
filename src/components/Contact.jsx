import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			name,
			email,
			message,
		};
		setTimeout(() => {
			setSubmitted(true);
		}, 300);
		axios
			.post(
				`${import.meta.env.VITE_GETFORM}`,
				{
					data,
				},
				{ headers: { Accept: 'application/json' } }
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '
		>
			<form
				action={handleSubmit}
				method='POST'
				className='flex flex-col justify-between max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'>
						Submit the form below or send me an email -{' '}
						<span className='text-cyan-600'>ersinahmeddev@gmail.com</span>
					</p>
				</div>
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					className='bg-[#ccd6f6] p-2 rounded-md outline-none focus:outline-cyan-400'
					type='text'
					placeholder='Name'
					name='name'
					required
				/>
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className='my-4 p-2 bg-[#ccd6f6] rounded-md outline-none focus:outline-cyan-400'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
				<textarea
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className='bg-[#ccd6f6] p-2 rounded-md outline-none focus:outline-cyan-400'
					name='message'
					rows='10'
					placeholder='Message'
					required
				></textarea>
				{(name === '', email === '', message === '') ? (
					<input
						type='submit'
						className='cursor-not-allowed shadow-black shadow-md mx-auto w-36 p-2 mt-6 rounded-md text-md font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-t'
						value='Fill Form'
					/>
				) : (
					<input
						onClick={(e) => handleSubmit(e)}
						type='submit'
						className=' shadow-black shadow-md mx-auto cursor-pointer w-36 p-2 mt-6 rounded-md text-md font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-gradient-to-t outline-none focus:outline-cyan-400'
						value='Send'
					/>
				)}

				{submitted && (
					<button className='shadow-black shadow-md mx-auto cursor-default w-56 md:w-96 px-2 md:p-4 mt-6 rounded-md text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-teal-400 to-green-400 hover:bg-gradient-to-t outline-none'>
						Your Message Was Sent!
					</button>
				)}
			</form>
		</div>
	);
};

export default Contact;
