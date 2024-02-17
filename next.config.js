/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		instrumentationHook: false,
		appDir: true,
	},
	images: {
		loader: 'custom',
		loaderFile: './src/libs/server-only/imageDelivery.js',
	},
}

module.exports = nextConfig
