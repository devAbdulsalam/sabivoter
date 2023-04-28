import './../globals.css';
import Header from '@/components//header';
import Footer from '@/components/Footer';
import Modals from '@/components/modals/Modals';
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
			<body className="relative h-full w-full">
				<Provider>
					<ModalContextProvider>
						<VoteContextProvider>
							<Header />
							<Modals />
							<div className="pt-10 mt-12 min-h-screen">{children}</div>
							<Footer />
						</VoteContextProvider>
					</ModalContextProvider>
				</Provider>
			</body>
		</html>
	);
}
