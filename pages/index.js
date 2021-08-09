import Head from 'next/head';
import '../styles/Home.module.css';
import App from '../src/App';

export default function Home() {
	return (
		<>
			<Head>
				<title>Kamxa | </title>
				<meta name='description' content='This is Kamxa app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<App />
			</main>

			<footer>This is footer</footer>
		</>
	);
}
