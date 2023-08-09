/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		instrumentationHook: false,
		appDir: true,
	},
}

module.exports = nextConfig
