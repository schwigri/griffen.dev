import { LangSwitcher } from "./LangSwitcher";
import React from "react";
import { SiteContext } from "../context/site.context";
import { TranslationString } from "../constants/translation.constants";
import { getTranslation } from "../utils/translation.util";
import styled from "styled-components";

const FooterItem = styled("div")`
	&:not(:last-child) {
		margin-bottom: 0.5em;
	}
`;

const Wrapper = styled("footer")`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: var(--responsive--spacing);
	padding-bottom: calc(
		var(--responsive--spacing) + env(safe-area-inset-bottom)
	);
`;

class Footer extends React.Component {
	render(): React.ReactNode {
		return (
			<SiteContext.Consumer>
				{context => (
					<Wrapper>
						<FooterItem>
							{getTranslation(TranslationString.Copyright, context.lang.code)}
						</FooterItem>

						<FooterItem>
							<a
								href={"https://github.com/schwigri/griffen.dev"}
								rel={"noopener noreferrer"}
								target={"_blank"}
							>
								<abbr
									title={getTranslation(
										TranslationString.LovePeaceReact,
										context.lang.code
									)}
								>
									💖✌️⚛️
								</abbr>
							</a>
						</FooterItem>

						<FooterItem>
							<LangSwitcher />
						</FooterItem>
					</Wrapper>
				)}
			</SiteContext.Consumer>
		);
	}
}

export { Footer };
