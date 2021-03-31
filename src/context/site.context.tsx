import { ISiteContext } from "../types/site.types";
import React from "react";

export const defaultSiteContext: ISiteContext = {
	lang: {
		code: "EN",
		locale: "en_US",
		name: "English",
		slug: "en",
	},
};

export const SiteContext = React.createContext<ISiteContext>(
	defaultSiteContext
);
