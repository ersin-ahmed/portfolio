import Image from 'next/image';

const Main = () => {
	return (
		<div className='grid grid-cols-3 grid-rows-3 gap-6 my-16 lg:mx-20 md:mx-4 mx-2'>
			<div className='bg-gray-200 text-white h-64 row-start-1 row-span-1 col-span-2 rounded-xl'>
				<h1 className='text-black text-xl text-center mt-28'>
					Project One Goes Here
				</h1>
			</div>
			<div className='bg-gray-200 text-black col-span-1 row-start-1 row-end-3 rounded-xl'>
				<div className='flex justify-center mt-4'>
					<Image
						src='/../public/self-image.jpg'
						width={100}
						height={100}
						className='rounded-full'
					/>
				</div>
				<div className='text-center'>
					<h1 className='text-2xl font-semibold mt-3'>
						Hello there!
						<br />
					</h1>
					<h1 className='text-xl mt-3'>
						My name is Ersin Ahmed,
						<br />
						I'm a Front End Developer.
						<br />
						From Burgas, Bulgaria.
					</h1>
				</div>
				<div className='text-center mt-10'>
					<h1 className='text-xl font-semibold underline mt-3'>
						Technical Skills:
						<br />
					</h1>
					<h1 className='text-xl mt-2'>
						Javascript / Typescript
						<br />
						React / NextJS <br />
						CSS / Tailwind
						<br />
						Node / Express
						<br />
						MongoDB / Mongoose
						<br />
						MySql / PostgreSql
						<br />
					</h1>
				</div>
			</div>
			<div className='bg-gray-200 text-white h-64 col-span-2 rounded-xl'>
				<h1 className='text-black text-xl row-end-3 row-span-2 text-center mt-28'>
					Project Two Goes Here
				</h1>
			</div>
		</div>
	);
};

export default Main;
