import { PageContent } from "../components/PageContent";
import { PageHeader } from "../components/PageHeader";
import React from "react";
import { SiteContext } from "../context/site.context";
import { TranslationString } from "../constants/translation.constants";
import { getTranslation } from "../utils/translation.util";

class Error404Page extends React.Component {
	render(): React.ReactNode {
		return (
			<SiteContext.Consumer>
				{context => (
					<>
						<PageHeader
							title={getTranslation(
								TranslationString.PageNotFound,
								context.lang.code
							)}
						/>

						<PageContent
							content={
								<p className={"has-text-align-center"}>
									{getTranslation(
										TranslationString.PageNotFoundMessage,
										context.lang.code
									)}
								</p>
							}
						/>
					</>
				)}
			</SiteContext.Consumer>
		);
	}
}

export default Error404Page;
