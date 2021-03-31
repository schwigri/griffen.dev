import { TranslationString } from "../constants/translation.constants";

export type Translations = {
	[key in TranslationString]: string;
};
