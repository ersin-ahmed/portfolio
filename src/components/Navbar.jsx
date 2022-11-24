import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='z-50 fixed w-full h-[80px] flex justify-between items-center align-middle px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<Link
					to='home'
					smooth={true}
					duration={400}
					className='cursor-pointer text-4xl px-2 tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400'
				>
					Ersin Ahmed
				</Link>
			</div>

			{/* Menu */}
			<ul className='hidden md:flex text-lg font-medium '>
				<li className='cursor-default'>
					<Link
						to='home'
						smooth={true}
						duration={400}
						className='hover:text-cyan-300 hover:border-b-4 hover:border-cyan-300 cursor-pointer'
					>
						Home
					</Link>
				</li>
				<li className='cursor-default'>
					<Link
						to='work'
						smooth={true}
						duration={400}
						className='hover:text-cyan-300 hover:border-b-4 hover:border-cyan-300 cursor-pointer'
					>
						Projects
					</Link>
				</li>
				<li className='cursor-default'>
					<Link
						to='skills'
						smooth={true}
						duration={400}
						className='hover:text-cyan-300 hover:border-b-4 hover:border-cyan-300 cursor-pointer'
					>
						Skills
					</Link>
				</li>
				<li className='cursor-default'>
					<Link
						to='about'
						smooth={true}
						duration={400}
						className='hover:text-cyan-300 hover:border-b-4 hover:border-cyan-300 cursor-pointer'
					>
						About
					</Link>
				</li>
				<li className='cursor-default'>
					<Link
						to='contact'
						smooth={true}
						duration={400}
						className='hover:text-cyan-300 hover:border-b-4 hover:border-cyan-300 cursor-pointer'
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-20 left-0 w-full h-screen font-bold text-cyan-300 bg-gradient-to-b from-[#0a192f] to-blue-900 flex flex-col justify-start items-center'
				}
			>
				<li className='py-6 text-4xl mt-8'>
					<Link onClick={handleClick} to='home' smooth={true} duration={400}>
						Home
					</Link>
				</li>

				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='work' smooth={true} duration={400}>
						Projects
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='skills' smooth={true} duration={400}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='about' smooth={true} duration={400}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='contact' smooth={true} duration={400}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
						<a
							className='flex justify-between items-center w-full text-gray-300 pl-2'
							href='https://www.linkedin.com/in/ersin-ahmed-54702b203/'
							rel='norefferer'
							target='_blank'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
						<a
							className='flex justify-between items-center w-full text-gray-300 pl-2'
							href='https://github.com/ersin-ahmed'
							rel='norefferer'
							target='_blank'
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500'>
						<Link
							to='contact'
							smooth={true}
							duration={400}
							className='flex justify-between items-center w-full text-gray-300 pl-2'
						>
							Email <HiOutlineMail size={30} />
						</Link>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
						<a
							className='flex justify-between items-center w-full text-gray-300 pl-2'
							href='https://docs.google.com/document/d/e/2PACX-1vQ_Q7c1hKV9VedSMWvwbuDS1ZTc2gJErlInKB7xclqhlmA19cJji3j5WczkGH2RKBLi_8hqIpUi73LN/pub'
							rel='norefferer'
							target='_blank'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
