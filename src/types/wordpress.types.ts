import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface GenericWpItem {
	id?: string;
}

export interface WpItem extends GenericWpItem {
	databaseId?: number;
	nodeType?: string;
}

export interface WpHasParent {
	parent?: WpItem;
	parentDatabaseId?: number;
	parentId?: string;
}

export interface WpNode<T> {
	node: T;
}

export interface WpNodes<T> {
	nodes: Array<T>;
}

export interface WpContentType {
	archivePage?: string;
	canExport?: boolean;
	deleteWithUser?: boolean;
	description?: string;
	excludeFromSearch?: boolean;
	hasArchive?: boolean;
}

export type WpLangCode = "AR" | "DE" | "EN" | "JA" | "NB";

export type WpLocale = "ar" | "de_CH" | "en_US" | "ja" | "nb_NO";

export interface WpLang extends GenericWpItem {
	code: WpLangCode;
	locale: WpLocale;
	name: string;
	slug: string;
}

export interface WpHasAuthor {
	author?: WpNode<WpAuthor>;
	authorDatabaseId?: number;
	authorId?: string;
	lastEditedBy?: WpNode<WpAuthor>;
}

export interface WpHasComments {
	commentCount?: number;
	commentStatus?: string;
	comments?: WpNodes<WpComment>;
}

export interface WpHasFeaturedImage {
	featuredImage?: WpNode<WpImage>;
	featuredImageDatabaseId?: number;
	featuredImageId?: string;
}

export interface WpImage
	extends WpItem,
		WpHasParent,
		WpHasAuthor,
		WpHasComments {
	altText?: string;
	caption?: string;
	contentType?: WpNode<WpContentType>;
	date?: string;
	dateGmt?: string;
	description?: string;
	desiredSlug?: string;
	fileSize?: number;
	language?: WpLang;
	link?: string;
	localFile?: FileNode;
	mediaItemUrl?: string;
	remoteFile?: FileNode;
}

export interface WpMenu extends WpItem {
	count?: number;
	locations?: Array<string>;
	menuItems?: WpNodes<WpMenuItem>;
	name?: string;
	slug?: string;
}

export interface WpMenuItem extends WpItem, WpHasParent {
	cssClasses?: string;
	description?: string;
	label?: string;
	locations?: Array<string>;
	menu?: WpNode<WpMenu>;
	order?: number;
	path?: string;
	url?: string;
}

export type WpComment = WpItem;

export interface WpAuthor extends WpItem {
	avatar?: {
		default?: string;
		forceDefault?: boolean;
		foundAvatar?: boolean;
		rating?: string;
		size?: number;
		url?: string;
		width?: number;
	};
	comments?: WpNodes<WpComment>;
	description?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	name?: string;
	pages?: WpNodes<WpPage>;
	posts?: WpNodes<WpPost>;
	registeredDate?: string;
	slug?: string;
	uri?: string;
	url?: string;
	username?: string;
}

export interface WpPageSeo {
	breadcrumbs?: Array<string>;
	canonical?: string;
	focuskw?: string;
	metaDesc?: string;
	metaKeywords?: string;
	opengraphAuthor?: string;
	opengraphDescription?: string;
	opengraphImage?: WpImage;
	opengraphModifiedTime?: string;
	opengraphPublishedTime?: string;
	opengraphPublisher?: string;
	opengraphSiteName?: string;
	opengraphTitle?: string;
	opengraphType?: string;
	opengraphUrl?: string;
	readingTime?: number;
	schema?: {
		articleType?: Array<string>;
		pageType?: Array<string>;
		raw?: string;
	};
	title?: string;
	twitterDescription?: string;
	twitterImage?: WpImage;
	twitterTitle?: string;
}

export interface WpPage
	extends WpItem,
		WpHasParent,
		WpHasAuthor,
		WpHasComments,
		WpHasFeaturedImage {
	content?: string;
	contentType?: WpNode<WpContentType>;
	date?: string;
	dateGmt?: string;
	desiredSlug?: string;
	guid?: string;
	isFrontPage?: boolean;
	isPostsPage?: boolean;
	isPrivacyPage?: boolean;
	isRevision?: boolean;
	language?: WpLang;
	link?: string;
	menuOrder?: number;
	modified?: string;
	modifiedGmt?: string;
	seo?: WpPageSeo;
	slug?: string;
	status?: string;
	title?: string;
	translations?: Array<WpPage>;
	uri?: string;
}

export type WpPost = WpItem;

export interface WpSeoBreadcrumbs {
	archivePrefix?: string;
	boldLast?: boolean;
	enabled?: boolean;
	homeText?: string;
	notFoundText?: string;
	prefix?: string;
	searchPrefix?: string;
	separator?: string;
	showBlogPage?: boolean;
}

export interface WpSeoOpenGraph {
	defaultImage?: WpImage;
	frontPage?: {
		description?: string;
		image?: WpImage;
		title?: string;
	};
}

export interface WpSeoRedirect {
	format?: string;
	origin?: string;
	target?: string;
	type?: string;
}

export interface WpSeoSchema {
	companyLogo?: WpImage;
	companyName?: string;
	companyOrPerson?: "company" | "person";
	inLanguage?: string;
	logo?: WpImage;
	personLogo?: WpImage;
	personName?: string;
	siteName?: string;
	siteUrl?: string;
	wordpressSiteName?: string;
}

export interface WpSeoSocial {
	facebook?: {
		defaultImage?: WpImage;
		url?: string;
	};
	instagram?: {
		url?: string;
	};
	linkedIn?: {
		url?: string;
	};
	mySpace?: {
		url?: string;
	};
	pinterest?: {
		metaTag?: string;
		url?: string;
	};
	twitter?: {
		cardType?: string;
		username?: string;
	};
	wikipedia?: {
		url?: string;
	};
	youTube?: {
		url?: string;
	};
}

export interface WpSeoWebmaster {
	baiduVerify?: string;
	googleVerify?: string;
	msVerify?: string;
	yandexVerify?: string;
}

export interface WpSeo {
	breadcrumbs?: WpSeoBreadcrumbs;
	openGraph?: WpSeoOpenGraph;
	redirects?: Array<WpSeoRedirect>;
	schema?: WpSeoSchema;
	social?: WpSeoSocial;
	webmaster?: WpSeoWebmaster;
}

export interface WpDiscussionSettings {
	defaultCommentStatus?: string;
	defaultPingStatus?: string;
}

export interface WpGeneralSettings {
	dateFormat?: string;
	description?: string;
	email?: string;
	language?: WpLangCode;
	startOfWeek?: number;
	timeFormat?: string;
	timezone?: string;
	title?: string;
	url?: string;
}

export interface WpReadingSettings {
	postsPerPage?: number;
}

export interface WpWritingSettings {
	defaultCategory?: number;
	defaultPostFormat?: string;
	useSmilies?: boolean;
}

export interface Wp extends GenericWpItem {
	defaultLanguage?: WpLang;
	discussionSettings?: WpDiscussionSettings;
	generalSettings?: WpGeneralSettings;
	languages?: Array<WpLang>;
	readingSettings?: WpReadingSettings;
	seo?: WpSeo;
	wpGatsby?: {
		arePrettyPermalinksEnabled?: boolean;
	};
	writingSettings?: WpWritingSettings;
}
