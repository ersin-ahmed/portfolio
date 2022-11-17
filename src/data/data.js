import Blog from '../assets/projects/blog.png';
import Portfolio from '../assets/projects/portfolio.png';

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
		name: 'Portfolio Site',
		description:
			"This is the very same Portfolio Site you're currently on at the moment. This is where I showcase my projects that i've built along with additional information about myself. I made this website using React with Vite as the building tool for the framework. And I used Tailwind CSS for the styling.",
		image: Portfolio,
		github: 'https://github.com/ersin-ahmed/portfolio',
		live: 'https://www.ersinahmed.dev/',
		stack: 'JavaScript, React, Vite, TailwindCSS and GetForm API',
	},
];
