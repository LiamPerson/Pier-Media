/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		instrumentationHook: false,
	},
	images: {
		loader: 'custom',
		loaderFile: './src/libs/server-only/imageDelivery.js',
	},
}

module.exports = nextConfig
