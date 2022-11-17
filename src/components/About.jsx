import React from 'react';

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen px-2 bg-gradient-to-t from-[#0a192f] to-blue-900 text-gray-300'
		>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>
							Hello Again. I'm Ersin Ahmed, nice to meet you. Welcome to my
							Portfolio.
						</p>
					</div>
					<div>
						<p className='text-lg font-medium'>
							I am a Web Developer from Burgas, Bulgaria. My technical skills
							include: Web Development with Javascript and React. I've been
							teaching myself how to code since the year 2017. Despite
							accumulating quite a bit of knowledge since then, I'm fully aware
							of the fact that in an ever-changing climate of Software
							Development you must always keep learning and keep the same
							student mentality no matter the expertise level!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
