import './../globals.css';
import Header from '@/components//header';
import Footer from '@/components/Footer';
import Modals from '@/components/Modals';
import Provider from './provider';
import VoteContextProvider from '@/context/VoteContext';
import ModalContextProvider from '@/context/ModalContext';

export const metadata = {
	title: 'Sabi voter',
	description: 'online voting app',
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="relative h-screen w-screen">
				<Provider>
					<ModalContextProvider>
						<VoteContextProvider>
							<Header />
							<Modals />
							<div className="w-full min-h-screen">{children}</div>
							<Footer />
						</VoteContextProvider>
					</ModalContextProvider>
				</Provider>
			</body>
		</html>
	);
}
