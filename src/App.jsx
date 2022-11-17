import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<Home />
			<Projects />
			<Skills />
			<About />
			<Contact />
		</div>
	);
}

export default App;
