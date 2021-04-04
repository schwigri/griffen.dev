import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import React from "react";
import { Seo } from "../components/Seo";
import { TranslationString } from "../constants/translation.constants";
import { WpPage } from "../types/wordpress.types";
import { getSrc } from "gatsby-plugin-image";
import { getTranslation } from "../utils/translation.util";
import { graphql } from "gatsby";

interface Props {
	data: {
		page: WpPage;
	};
}

class PageTemplate extends React.Component<Props> {
	render(): React.ReactNode {
		const { page } = this.props.data;
		let isFrontPage = !!page.isFrontPage;
		if (!isFrontPage) {
			page.translations?.forEach(translation => {
				if (translation.isFrontPage) {
					isFrontPage = true;
				}
			});
		}

		return (
			<>
				<Seo
					meta={{
						description: page.seo?.metaDesc,
						keywords: page.seo?.metaKeywords,
					}}
					opengraph={{
						description: page.seo?.opengraphDescription,
						image: {
							alt: page.seo?.opengraphImage?.altText || "",
							url: page.seo?.opengraphImage?.localFile
								? getSrc(page.seo.opengraphImage.localFile)
								: undefined,
						},
						modifiedTime: page.seo?.opengraphModifiedTime,
						publishedTime: page.seo?.opengraphPublishedTime,
						title: page.seo?.opengraphTitle,
					}}
					title={page.seo?.title}
					twitter={{
						description: page.seo?.twitterDescription,
						image: {
							alt: page.seo?.twitterImage?.altText || "",
							url: page.seo?.twitterImage?.localFile
								? getSrc(page.seo.twitterImage.localFile)
								: undefined,
						},
						title: page.seo?.twitterTitle,
					}}
				/>

				<PageHeader
					isFrontPage={isFrontPage}
					title={page.title || getTranslation(TranslationString.Untitled)}
				/>

				{page.content && <PageContent content={page.content} />}
			</>
		);
	}
}

export default PageTemplate;

export const query = graphql`
	query PageTemplateQuery($id: String!) {
		page: wpPage(id: { eq: $id }) {
			content
			id
			isFrontPage
			seo {
				metaDesc
				metaKeywords
				opengraphDescription
				opengraphImage {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				opengraphModifiedTime
				title
			}
			title
			translations {
				isFrontPage
			}
		}
	}
`;
