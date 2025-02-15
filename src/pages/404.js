import Link from 'next/link';

export default function PageNotFound() {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="font-primary text-branding-accent-secondary md:text-7xl text-4xl">
				UH-OH!
			</h1>
			<h2 className="font-primary text-branding-accent-primary-darker md:text-3xl">
				WE COULDN&#39;T FIND THE PAGE
			</h2>
			<p className="font-secondary md:my-8 md:text-lg my-4 text-sm text-center text-gray-500">
				The URL might be incorrect or it does not exist anymore
			</p>

			<Link href="/" legacyBehavior>
				<a className="font-secondary bg-branding-accent-primary-darker md:text-lg md:px-12 md:py-3 hover:bg-branding-accent-primary active:bg-branding-accent-primary-darker px-8 py-1 rounded-lg text-blue-500">
					BACK TO HOME
				</a>
			</Link>
		</div>
	);
}
