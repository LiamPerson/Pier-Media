/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		instrumentationHook: false,
		appDir: true,
	},
	images: {
		loader: 'custom',
		loaderFile: './libs/server-only/imageDelivery.js',
	},
}

module.exports = nextConfig
