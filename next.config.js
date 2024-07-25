/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: false,
	experimental: {
		concurrentFeatures: false, // <- Turn this option to false
		serverComponents: true,
	},
	basePath: '/nu_space_fe',
	assetPrefix: '/nu_space_fe',
	swcMinify: true,
	webpack: (config) => {
		config.output.publicPath = `/nu_space_fe/_next/`;
		return config;
	},
	images: {
		domains: [
			'images.unsplash.com',
			'cdn.sanity.io',
			'avatars.githubusercontent.com',
			'github.com',
			'uploads-ssl.webflow.com',
			'firebasestorage.googleapis.com',
		],
	},

	env: {
		NEXT_PUBLIC_SANITY_DATASET: 'production',
		NEXT_PUBLIC_SANITY_PROJECTID: '1t6krb1s',
	},
};

module.exports = nextConfig;
