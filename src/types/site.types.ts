import { WpLang } from "./wordpress.types";

export interface SiteTranslations {
	[key: string]: {
		slug: string;
	};
}

export interface ISiteContext {
	lang: WpLang;
	slug?: string;
	translations?: SiteTranslations;
}
