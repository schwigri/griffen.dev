import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { LocalLink } from "./LocalLink";
import React from "react";
import { SiteContext } from "../context/site.context";
import { TranslationString } from "../constants/translation.constants";
import { getSlug } from "../utils/localization.util";
import { getTranslation } from "../utils/translation.util";
import styled from "styled-components";

const Title = styled("span")`
	font-family: var(--fonts--heading);
	font-size: 1.4em;
	font-weight: 600;
`;

const Logo = styled("div")`
	height: 4rem;
	width: calc(4rem + var(--global--spacing-mini));
`;

const Wrapper = styled(LocalLink)`
	align-items: center;
	color: inherit;
	display: flex;
	position: relative;
	text-decoration: none;
	z-index: 2;
`;

interface Props {
	data: {
		logo: FileNode;
	};
}

class Branding extends React.Component<Props> {
	render(): React.ReactNode {
		const { logo } = this.props.data;

		const logoImage = getImage(logo);

		return (
			<SiteContext.Consumer>
				{context => (
					<Wrapper to={getSlug(context.lang)}>
						{logoImage && (
							<Logo>
								<GatsbyImage alt={""} image={logoImage} loading={"eager"} />
							</Logo>
						)}

						<Title>
							<span className={"until-sm"}>
								{getTranslation(
									TranslationString.TitleShort,
									context.lang.code
								)}
							</span>

							<span className={"upon-sm"}>
								{getTranslation(TranslationString.Title, context.lang.code)}
							</span>
						</Title>
					</Wrapper>
				)}
			</SiteContext.Consumer>
		);
	}
}

function getBranding(): React.ReactElement {
	const query = graphql`
		query BrandingQuery {
			logo: file(relativePath: { eq: "icon.png" }) {
				childImageSharp {
					gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 40)
				}
			}
		}
	`;

	return (
		<StaticQuery query={query} render={data => <Branding data={data} />} />
	);
}

export { getBranding as Branding };
