import { StaticQuery, graphql } from "gatsby";
import { LocalLink } from "./LocalLink";
import React from "react";
import { SiteContext } from "../context/site.context";
import { WpLang } from "../types/wordpress.types";
import { getSlug } from "../utils/localization.util";
import styled from "styled-components";

const LangLink = styled(LocalLink)`
	color: inherit;
	text-decoration: none;

	&:focus,
	&:hover {
		text-decoration: underline;
	}

	&[aria-current="page"] {
		font-weight: 600;
		text-decoration: none;
	}
`;

const Lang = styled("li")`
	display: inline-block;

	&:not(:last-child) {
		&::after {
			content: "/";
			margin: 0 0.5em;
		}
	}
`;

const Langs = styled("ul")`
	list-style: none;
	margin: 0;
	padding: 0;
`;

interface Props {
	langs: Array<WpLang>;
}

class LangSwitcher extends React.Component<Props> {
	render(): React.ReactNode {
		const { langs } = this.props;

		return (
			<SiteContext.Consumer>
				{context => (
					<Langs role={"list"}>
						{langs
							.sort((a, b) => (a.code > b.code ? 1 : -1))
							.map(lang => (
								<Lang key={lang.id}>
									{context.lang.locale === lang.locale ? (
										<LangLink aria-current={"page"} as={"span"}>
											{lang.name}
										</LangLink>
									) : (
										<LangLink
											to={
												context.translations?.[lang.code]?.slug || getSlug(lang)
											}
										>
											{lang.name}
										</LangLink>
									)}
								</Lang>
							))}
					</Langs>
				)}
			</SiteContext.Consumer>
		);
	}
}

function getLangSwitcher(): React.ReactElement {
	const query = graphql`
		query LangSwitcherQuery {
			wp {
				languages {
					code
					id
					locale
					name
					slug
				}
			}
		}
	`;

	return (
		<StaticQuery
			query={query}
			render={data => <LangSwitcher langs={data.wp.languages} />}
		/>
	);
}

export { getLangSwitcher as LangSwitcher };
