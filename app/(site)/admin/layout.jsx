import './../../globals.css';
import Sidebar from './Sidebar';

export const metadata = {
	title: 'SabiVoter || Admin',
	description: 'Generated by create next app',
};

export default function DashboardLayout({ children }) {
	return (
		<div className="flex pt-10 h-screen bg-white">
			<Sidebar />
			{children}
		</div>
	);
}
