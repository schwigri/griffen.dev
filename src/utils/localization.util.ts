import { WpLang, WpLangCode } from "../types/wordpress.types";

export const getSlug = (lang: WpLang): string => {
	return "EN" === lang.code ? "/" : `/${lang.slug}/`;
};

export const getLangCode = (lang: WpLang): WpLangCode => {
	switch (lang.locale) {
		case "ar":
			return "AR";

		case "de_CH":
			return "DE";

		case "ja":
			return "JA";

		case "nb_NO":
			return "NB";

		default:
			return "EN";
	}
};
