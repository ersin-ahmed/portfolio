import React from 'react';
import { data } from '../data/data.js';

const Projects = () => {
	const project = data;

	return (
		<div id='Background Div' className='bg-[#0a192f]'>
			<div
				name='work'
				className='w-full h-full mb-24 max-w-[1000px] mx-auto p-4 text-gray-300 flex flex-col'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
						Projects
					</p>
					<p className='py-6'> Check out some of my recent work</p>
				</div>
				{project.map((item, index) => (
					<div
						id='Project Container'
						className='flex flex-col justify-between align-middle items-center lg:flex-row px-2 py-6 mb-24'
						key={index}
					>
						<div id='Project Description'>
							<h1 className='text-4xl font-bold py-8  lg:py-6 border-b-4 border-blue-600'>
								{item.name}
							</h1>
							<p className='text-lg py-6 lg:py-2 font-medium'>
								{item.description}
							</p>
							<p className='text-xl py-6 lg:py-2 font-semibold'>
								<span className='text-md font-medium text-cyan-600'>
									Techonologies Used:{' '}
								</span>
								{item.stack}
							</p>
						</div>
						<div
							id='Project Image'
							className='flex flex-col justify-center items-center align-middle p-6 lg:p-2 rounded-md '
						>
							<a href='/' rel='norefferer' target='_blank'>
								<img
									src={item.image}
									alt='Project Image'
									className='rounded-md border-2 border-cyan-700 object-scale-down h-auto w-[70vw]'
								/>
							</a>
							<div className='flex justify-center align-middle items-center pt-4 text-center'>
								<a
									href={item.live}
									rel='norefferer'
									target='_blank'
									className='shadow-black shadow-md cursor-pointer p-2 mx-3 rounded-md text-md font-bold text-white bg-gradient-to-r from-cyan-700 to-blue-700 hover:bg-gradient-to-t'
								>
									View Project
								</a>
								<a
									href={item.github}
									rel='norefferer'
									target='_blank'
									className='shadow-black shadow-md cursor-pointer p-2 mx-3 rounded-md text-md font-bold text-white bg-gradient-to-r from-blue-700 to-cyan-700 hover:bg-gradient-to-t'
								>
									GitHub Repo
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
