/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{ protocol: "http", hostname: "localhost", port: "5000", pathname: "/uploads/**" },
			// Add your production backend host here, e.g.:
			// { protocol: "https", hostname: "api.mematdigi.com", pathname: "/uploads/**" },
		],
	},
};

module.exports = nextConfig;
