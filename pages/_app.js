import '../styles/index.css';
import Layout from '../components/Layout';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
