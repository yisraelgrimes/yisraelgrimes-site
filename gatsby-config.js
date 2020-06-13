// Project Configurations
// - Site Metadata
// - Gatsby Plugins & Configs


module.exports = {
	siteMetadata: {
		title: `Yisrael Grimes`,
		description: `This is a site description!`,
		author: `@GrimesClassic`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [
					`node_modules/luscious/core`,
					`node_modules/modularscale-sass`,
					`src/styles`,
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`,
				ignore: [`**/.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			// Used for markdown
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [
					{
						// Syntax highlighting for code snippets
						resolve: `gatsby-remark-vscode`,
						options: {
							theme: `SynthWave '84`, // robb0wen/synthwave-vscode
							extensions: [`synthwave-vscode`],
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1500,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: ``,
		// 	},
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-boilerplate`,
				short_name: `boilerplate`,
				start_url: `/`,
				background_color: `#333333`,
				theme_color: `#333333`,
				display: `minimal-ui`,
				icon: `src/images/icon-dark.png`, // Relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`, // Add this plugin after 'manifest'
	],
}
