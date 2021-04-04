import { ISiteContext, SiteTranslations } from "../types/site.types";
import { SiteContext, defaultSiteContext } from "../context/site.context";
import { WpLang, WpPage } from "../types/wordpress.types";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "./store.util";

interface Props {
	element: React.ReactNode;
	props: {
		pageContext: {
			language?: WpLang;
			pageId?: string;
			translations?: Array<WpPage>;
			uri?: string;
		};
	};
}

export const wrapPageElement = ({
	element,
	props,
}: Props): React.ReactElement => {
	const translations: SiteTranslations = {};
	props.pageContext.translations?.forEach(translation => {
		if (translation.language && translation.uri) {
			translations[translation.language.code] = {
				slug: translation.uri,
			};
		}
	});

	let lang = defaultSiteContext.lang;

	if (props.pageContext.language) {
		lang = props.pageContext.language;
		sessionStorage.setItem("lang", JSON.stringify(props.pageContext.language));
	} else {
		const sessionLang = sessionStorage.getItem("lang");
		if (sessionLang) lang = JSON.parse(sessionLang);
	}

	const context: ISiteContext = {
		lang,
		slug: props.pageContext.uri,
		translations,
	};

	return (
		<SiteContext.Provider value={context}>
			<Helmet
				htmlAttributes={{
					dir: "AR" === lang.code ? "rtl" : "ltr",
					lang: lang.code.toLowerCase(),
				}}
			/>

			<Layout>{element}</Layout>
		</SiteContext.Provider>
	);
};

export const wrapRootElement = ({ element }: Props): React.ReactElement => {
	const store = createStore();
	return <Provider store={store}>{element}</Provider>;
};
