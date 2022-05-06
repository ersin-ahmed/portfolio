import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Navbar = () => {
	return (
		<>
			<Head>
				<title>Portfolio of Ersin Ahmed</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<nav className='bg-gray-700 text-white border-gray-200 px-2 sm:px-4 py-3'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link href='/' className='flex items-center'>
						<a className='hover:text-teal-200 text-xl flex'>
							<Image
								src='/../public/logo.jpg'
								width={40}
								height={40}
								className='rounded-full justify-start'
							/>
							<h1 className='mt-1 mx-5'>Ersin Ahmed</h1>
						</a>
					</Link>
					<ul className='flex gap-10'>
						<Link href='/contacts'>
							<a className='hover:text-teal-200 mb-1 '>Contact</a>
						</Link>
						<Link href='/about'>
							<a className='hover:text-teal-200 mb-1 '>About</a>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
