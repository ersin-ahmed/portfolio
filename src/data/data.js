import Blog from '../assets/projects/hrndvblg.png';
import Portfolio from '../assets/projects/prtflio.png';
import Contact from '../assets/projects/cma.png';
import Aircnc from '../assets/projects/aircnc.png';

export const data = [
	{
		id: 1,
		name: 'HeronDev Blog',
		description:
			"This is a Blog Site I made using React's NextJS with ISR (Incremental Static Regeneration) implementation, TailwindCSS and Sanity CMS as a Backend to fetch Blog Posts and store comments under blog posts. It also has SendGrip API integration to recieve emails directly from the Contact page's form.",
		image: Blog,
		github: 'https://github.com/ersin-ahmed/herondevblog',
		live: 'https://herondevblog.com/',
		stack:
			'TypeScript, React, NextJS, Tailwind CSS, Sanity CMS and SendGrid API',
	},
	{
		id: 2,
		name: 'Airbnb Clone | Aircnc',
		description:
			'An Airbnb Clone made using NextJS and Node/Express with MongoDB. For styling I used TailwindCSS. Client side deployment was made through vercel.com, Backend on render.com as an express api web service.',
		image: Aircnc,
		github: 'https://github.com/ersin-ahmed/aircnc-client',
		live: 'https://aircnc-ersin-ahmed.vercel.app/',
		stack:
			'JavaScript, React, NextJS, TailwindCSS, Node, Express, MongoDB, MongoDB Atlas',
	},
	{
		id: 3,
		name: 'Contact Management App (MERN)',
		description:
			'A Full Stack Web App with full CRUD and authentication built using the popular MERN stack (MongoDB, Express, React, Node). For styling I used TailwindCSS. Deployment was made through render.com, the client side as a static website and the backend as an express api web service. The build tool used on the front-end is Vite.',
		image: Contact,
		github: 'https://github.com/ersin-ahmed/contact-manager-mern-client',
		live: 'https://contact-manager-mern.onrender.com',
		stack:
			'JavaScript, React, Vite, TailwindCSS, Node, Express, MongoDB, MongoDB Atlas',
	},
	{
		id: 4,
		name: 'Portfolio Site',
		description:
			"This is the very same Portfolio Site you're currently on at the moment. This is where I showcase my projects that i've built along with additional information about myself. I made this website using React with Vite as the building tool for the framework. And I used Tailwind CSS for the styling.",
		image: Portfolio,
		github: 'https://github.com/ersin-ahmed/portfolio',
		live: 'https://www.ersinahmed.dev/',
		stack: 'JavaScript, React, Vite, TailwindCSS and GetForm API',
	},
];
