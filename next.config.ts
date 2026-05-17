import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "www.emiwyze.online",
					},
				],

				destination: "https://emiwyze.online/:path*",

				permanent: true,
			},
		]
	},
}

export default nextConfig
