import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Typescript from '../assets/typescript.png';

const Skills = () => {
	return (
		<div
			name='skills'
			className='w-full h-full px-2 bg-gradient-to-t from-blue-900 to-[#0a192f] text-gray-300'
		>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
						Skills
					</p>
					<p className='py-6'>These are the technologies I'm familiar with</p>
				</div>

				<div className='w-full grid gird-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={HTML} alt='HTML icon' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={CSS} alt='CSS icon' />
						<p className='my-4'>CSS</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={Tailwind}
							alt='Tailwind icon'
						/>
						<p className='my-4'>Tailwind</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={JavaScript}
							alt='Javascript icon'
						/>
						<p className='my-4'>JavaScript</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={Typescript}
							alt='Typescript icon'
						/>
						<p className='my-4'>TypeScript</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={ReactImg}
							alt='React icon'
						/>
						<p className='my-4'>React</p>
					</div>

					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={Node} alt='Node icon' />
						<p className='my-4'>Node JS</p>
					</div>
					<div className='rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={Mongo} alt='MongoDB icon' />
						<p className='my-4'>MongoDB</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
