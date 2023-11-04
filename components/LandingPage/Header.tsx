import React from 'react';

import { BeakerIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Header() {
	return (
		<header className="container flex justify-between shadow-md md:shadow-none h-20 ">
			<img
				className="md:hidden lg:inline-flex pt-2"
				src="./images/logo.svg"
				alt=""
				width="180"
				height="180"
			/>
			<img
				className="hidden md:inline-block lg:hidden"
				src="./images/logo.svg"
				alt=""
				width="45"
			/>
			<div className="flex items-center">
				<BeakerIcon className="h-10 md:hidden" />
				<div className="hidden md:flex items-center space-x-3 lg:space-x-8">
					{/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
					<Link href="../Dashboard/Home" className="nav-item">
						Dashboard
					</Link>
					{/* <div className="nav-item">Product</div> */}
					<p className="nav-item">Resouces</p>
					{/* </div> */}

					<button className="secondary-button">Sign in</button>
					<button className="primary-button">Sign up</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
