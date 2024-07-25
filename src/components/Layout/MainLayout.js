import React from 'react';
import Header from '../General/Header';
import Footer from '../General/Footer';

const MainLayout = ({ children }) => (
	<>
		<div
			className="flex min-h-screen flex-col justify-between"
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/Background.png)`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{/* <Header /> */}
			<main className="">{children}</main>
			{/* <Footer /> */}
		</div>
	</>
);
export default MainLayout;
