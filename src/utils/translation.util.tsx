import {
	EnglishTranslations,
	JapaneseTranslations,
	TranslationString,
} from "../constants/translation.constants";
import { WpLangCode } from "../types/wordpress.types";
import { get } from "lodash";

export const getTranslation = (
	string: TranslationString,
	lang: WpLangCode = "EN",
	data?: Record<string, string>
): string => {
	let translations = EnglishTranslations;
	switch (lang) {
		case "JA":
			translations = JapaneseTranslations;
			break;
	}

	const translatedString = translations[string];

	return insertDynamicValues(translatedString, data);
};

const insertDynamicValues = (
	translatedString: string,
	data?: Record<string, string>
): string => {
	let success = true;

	const finalString = translatedString.replace(/\$?{([^}]+)}/g, (_, match) => {
		const val = get(data, match, null);
		if (null === val) {
			success = false;
			return "";
		}
		return val;
	});

	return success ? finalString : "";
};
