import { WpLang } from "../types/wordpress.types";

export const getSlug = (lang: WpLang): string => {
	return "EN" === lang.code ? "/" : `/${lang.slug}/`;
};
