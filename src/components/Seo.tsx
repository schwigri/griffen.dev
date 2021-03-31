import { StaticQuery, graphql } from "gatsby";
import { GatsbySite } from "../types/gatsby.types";
import { Helmet } from "react-helmet";
import React from "react";
import { SiteContext } from "../context/site.context";
import { TranslationString } from "../constants/translation.constants";
import { Wp } from "../types/wordpress.types";
import { getTranslation } from "../utils/translation.util";

interface Props extends BaseProps {
	data: {
		site: GatsbySite;
		wp: Wp;
	};
}

class Seo extends React.Component<Props> {
	render(): React.ReactNode {
		const { data, meta, opengraph, title, twitter } = this.props;

		const helmetMeta: React.DetailedHTMLProps<
			React.MetaHTMLAttributes<HTMLMetaElement>,
			HTMLMetaElement
		>[] = [];

		if (data.wp.seo?.social?.twitter?.username) {
			helmetMeta.push({
				content: data.wp.seo.social.twitter.username,
				name: "twitter:site",
			});
		}

		if (meta) {
			Object.entries(meta).forEach(([key, value]) => {
				helmetMeta.push({
					content: value,
					name: key,
				});
			});
		}

		if (opengraph?.title) {
			helmetMeta.push({
				content: opengraph.title,
				property: "og:title",
			});
		} else if (title) {
			helmetMeta.push({
				content: title,
				property: "og:title",
			});
		}

		if (opengraph?.description) {
			helmetMeta.push({
				content: opengraph.description,
				property: "og:description",
			});
		}

		if (twitter?.image?.url) {
			helmetMeta.push({
				content: twitter.image.url,
				name: "twitter:image",
			});
			helmetMeta.push({
				content: twitter.image.alt,
				name: "twitter:image:alt",
			});
			helmetMeta.push({
				content:
					data.wp.seo?.social?.twitter?.cardType || "summary_large_image",
				name: "twitter:card",
			});
		}

		if (opengraph?.image?.url) {
			helmetMeta.push({
				content: opengraph.image.url,
				property: "og:image",
			});
			helmetMeta.push({
				content: opengraph.image.alt,
				property: "og:image:alt",
			});

			if (!twitter?.image?.url) {
				helmetMeta.push({
					content:
						data.wp.seo?.social?.twitter?.cardType || "summary_large_image",
					name: "twitter:card",
				});
			}
		}

		return (
			<SiteContext.Consumer>
				{context => (
					<Helmet
						meta={helmetMeta}
						title={title}
						titleTemplate={getTranslation(
							TranslationString.TitleTemplate,
							context.lang.code
						)}
					>
						{context.slug && (
							<link
								href={`${data.site.siteMetadata?.siteUrl}${context.slug}`}
								rel={"canonical"}
							/>
						)}

						{context.slug && (
							<link
								href={`${data.site.siteMetadata?.siteUrl}${context.slug}`}
								hrefLang={context.lang.code.toLowerCase()}
								rel={"alternate"}
							/>
						)}

						{context.translations &&
							Object.entries(context.translations).map(([code, { slug }]) => (
								<link
									href={`${data.site.siteMetadata?.siteUrl}${slug}`}
									hrefLang={code.toLowerCase()}
									key={code}
									rel={"alternate"}
								/>
							))}
					</Helmet>
				)}
			</SiteContext.Consumer>
		);
	}
}

interface BaseProps {
	meta?: {
		description?: string;
		keywords?: string;
	};
	opengraph?: {
		description?: string;
		image?: {
			alt: string;
			url?: string;
		};
		modifiedTime?: string;
		publishedTime?: string;
		title?: string;
		url?: string;
	};
	title?: string;
	twitter?: {
		description?: string;
		image?: {
			alt: string;
			url?: string;
		};
		title?: string;
	};
}

function getSeo(props: BaseProps): React.ReactElement {
	const query = graphql`
		query SeoQuery {
			site {
				siteMetadata {
					siteUrl
				}
			}
			wp {
				seo {
					social {
						twitter {
							cardType
							username
						}
					}
				}
			}
		}
	`;

	return (
		<StaticQuery
			query={query}
			render={data => <Seo data={data} {...props} />}
		/>
	);
}

export { getSeo as Seo };
