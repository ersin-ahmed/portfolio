import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Footer = () => {
	return (
		<>
			<footer className='md:fixed md:inset-x-0 md:bottom-0 bg-gray-800 text-white border-gray-200 px-2 sm:px-4 py-2'>
				<div className='container items-center mx-auto'>
					<ul className='flex justify-center gap-24'>
						<Link href='/contacts'>
							<a className='hover:text-teal-200 mb-1 '>GitHub</a>
						</Link>
						<Link href='/about'>
							<a className='hover:text-teal-200 mb-1 '>Twitter</a>
						</Link>
						<Link href='/about'>
							<a className='hover:text-teal-200 mb-1 '>LinkedIn</a>
						</Link>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;
