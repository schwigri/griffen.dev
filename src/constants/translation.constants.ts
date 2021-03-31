import { Translations } from "../types/translation.types";

export enum TranslationString {
	CloseMenu,
	Copyright,
	LovePeaceReact,
	OpenMenu,
	PageNotFound,
	PageNotFoundMessage,
	Title,
	TitleShort,
	TitleTemplate,
	Untitled,
}

export const EnglishTranslations: Translations = {
	[TranslationString.CloseMenu]: "Close menu",
	[TranslationString.Copyright]: "Copyright © 2021 Griffen Schwiesow",
	[TranslationString.LovePeaceReact]: "Made with love, peace, and React",
	[TranslationString.OpenMenu]: "Open menu",
	[TranslationString.PageNotFound]: "Page not found",
	[TranslationString.PageNotFoundMessage]:
		"Unfortunately, this page does not seem to exist!",
	[TranslationString.Title]: "Griffen Schwiesow",
	[TranslationString.TitleShort]: "Griffen",
	[TranslationString.TitleTemplate]: "%s — Griffen Schwiesow",
	[TranslationString.Untitled]: "Untitled",
};

export const JapaneseTranslations: Translations = {
	[TranslationString.CloseMenu]: "メニューを閉める",
	[TranslationString.Copyright]: "令和三年 © グリフィン・シュヴィーゾー",
	[TranslationString.LovePeaceReact]: "愛を込めてプログラミングを",
	[TranslationString.OpenMenu]: "メニューを開く",
	[TranslationString.PageNotFound]: "ページが見つかりません",
	[TranslationString.PageNotFoundMessage]:
		"申し訳ございませんが、お探しのページが存在ではないみたいです。",
	[TranslationString.Title]: "グリフィン・シュヴィーゾー",
	[TranslationString.TitleShort]: "グリフィン",
	[TranslationString.TitleTemplate]: "%s ｜ グリフィン・シュヴィーゾー",
	[TranslationString.Untitled]: "無題",
};
