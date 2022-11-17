import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profile from '../assets/profile-sm2.jpg';

const Home = () => {
	return (
		<div name='home' className='w-ful h-full bg-[#0a192f] pb-32 sm:pb-16 py-16'>
			{/* Container */}

			{/* Animated background */}

			{/* Animated background */}

			<div className='area flex flex-col md:flex-row mx-auto w-full lg:w-[70%] sm:h-screen h-[80vh]'>
				<ul className='circles select-none'>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
					<li className='cursor-default'></li>
				</ul>
				<div className='z-10 fade-in-right max-w-[1000px] mx-auto px-8 flex flex-col justify-center sm:h-screen h-[60vh]'>
					<p className='text-xl font-semibold text-transparent pt-16 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'>
						Hi, my name is
					</p>
					<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
						Ersin Ahmed
					</h1>
					<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
						I'm a Web Developer.
					</h2>
					<p className='text-[#8892b0] text-xl font-medium py-4 max-w-[700px]'>
						I am a front-end web developer who specializes in building and
						designing web applications with exceptional user experiences. <br />
						Welcome to my Portfolio.
					</p>
					<div>
						<Link to='work' smooth={true} duration={400}>
							<button className='mx-auto mt-12 sm:mt-0 sm:mx-0 group text-white border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-cyan-400 to-blue-400 hover:border-cyan-400'>
								View Projects
								<span>
									<HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div className='z-10 sm:px-8 mb-16 sm:my-auto mx-auto mt-16'>
					<img
						src={profile}
						alt='Picture of Ersin Ahmed'
						className='fade-in-image object-right rounded-full border-2 border-cyan-400 w-36 sm:w-44 md:w-64 mx-auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
