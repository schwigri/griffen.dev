module.exports = {
	createPages: async ({ actions, graphql }) => {
		const { createPage } = actions;

		const result = await graphql(`
			{
				site {
					siteMetadata {
						description
						siteUrl
						title
					}
				}

				pages: allWpPage {
					nodes {
						id
						language {
							code
							locale
							name
							slug
						}
						translations {
							uri
							language {
								code
							}
						}
						uri
					}
				}
			}
		`);

		// Build pages
		await Promise.all(
			result.data.pages.nodes.map(
				async ({ id, language, translations, uri }) =>
					await createPage({
						component: require.resolve("./src/templates/page.tsx"),
						context: { id, language, uri, translations },
						path: uri,
					})
			)
		);
	},
};
