require("dotenv").config();

module.exports = {
	siteMetadata: {
		description: "My personal homepage",
		siteUrl: "https://www.griffen.dev",
		title: "Griffen Schwiesow",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "graphics",
				path: "./src/graphics/",
			},
		},
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: process.env.WPGRAPHQL_URL,
			},
		},
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				env: {
					development: {
						host: null,
						policy: [{ disallow: ["/"], userAgent: "*" }],
						sitemap: null,
					},
					production: {
						policy: [{ allow: "/", userAgent: "*" }],
					},
					host: "https://www.griffen.dev",
					sitemap: "https://www.griffen.dev/sitemap.xml",
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				background_color: "#ffffff",
				display: "browser",
				icon: require.resolve("./src/graphics/icon.png"),
				icons: [
					{
						purpose: "any maskable",
						src: require.resolve("./src/graphics/maskable-icon.png"),
						sizes: "512x512",
						type: "image/png",
					},
				],
				lang: "en",
				name: "Griffen Schwiesow",
				short_name: "Griffen",
				start_url: "/",
				theme_color: "#1467ff",
				localize: [
					{
						lang: "de",
						start_url: "/de/",
					},
					{
						lang: "ja",
						name: "グリフィン・シュヴィーゾー",
						short_name: "グリフィン",
						start_url: "/ja/",
					},
				],
			},
		},
	],
};
