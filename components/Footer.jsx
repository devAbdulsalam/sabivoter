import Link from 'next/link';
import Image from 'next/image';
// import social data
import { social } from '@/utils/Data';

// import logo
import Logo from '@/public/assets/logo.svg';

export default function Footer() {
	return (
		<footer className="bg-tertiary py-12">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
					<div className="flex space-x-6 items-center justify-center">
						{social.map((item, index) => {
							const { href, icon, name } = item;
							return (
								<Link className="text-accent text-base" href={href} key={index}>
									{icon || name}
								</Link>
							);
						})}
					</div>
					<div>
						<Link href="./">
							<Image src={Logo} alt="logo" />
						</Link>
					</div>
					<p className="text-paragraph opacity-80 text-[15px]">
						&copy; 2022{' '}
						<Link
							href="https://github.com/devAbdulsalam"
							className="text-accent hover:tertiary-Light"
						>
							abdulsalam M.
						</Link>{' '}
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
