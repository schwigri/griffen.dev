import { createGlobalStyle } from "styled-components";
import { wordpress } from "./wordpress";

export const GlobalStyle = createGlobalStyle`
	:root {
		--colors--accent: #125be1;
		--colors--background: #fff;
		--colors--copy: #333;
		--colors--link-border: rgba(20, 103, 255, 0.15);
		--colors--separator-shadow: rgba(0, 0, 0, 0.25);
		--colors--subtitle: #666;
		--colors--theme: #fff8db;

		@media only screen and (prefers-color-scheme: dark) {
			--colors--accent: #fffae6;
			--colors--background: #111;
			--colors--copy: #fff;
			--colors--link-border: rgba(255, 248, 219, 0.15);
			--colors--separator-shadow: rgba(255, 255, 255, 0.5);
			--colors--subtitle: #ccc;
			--colors--theme: #1467ff;
		}

		--fonts--code: "JetBrains Mono", monospace;
		--fonts--copy: "Work Sans", "M PLUS 1p", "Noto Sans Arabic", sans-serif;
		--fonts--heading: Prompt, "M PLUS 1p", "Noto Sans Arabic", sans-serif;

		--global--content-spacing: 6.4rem;
		--global--content-width: 1220px;
		--global--copy-width: 700px;
		--global--spacing-mini: 0.8rem;

		--responsive--spacing: 1.6rem;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			--responsive--spacing: 3.2rem;
		}
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: var(--colors--theme);
		color: var(--colors--copy);
		font-family: var(--fonts--copy);
		font-size: 1.6rem;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--fonts--heading);
		font-weight: 600;
		line-height: 1;
		margin-bottom: 0.5em;
		margin-top: 1em;
	}

	p {
		line-height: 1.666;
		margin-bottom: 1em;
		margin-top: 0;
	}

	a:not([class]) {
		border-bottom: 2px solid var(--colors--link-border);
		color: var(--colors--accent);
		font-weight: 600;
		text-decoration: none;
		transition: 0.3s;

		&:focus,
		&:hover {
			background-color: var(--colors--link-border);
			border-bottom-color: var(--colors--accent);
		}
	}

	abbr[title] {
		cursor: help;
		position: relative;
		text-decoration: none;

		&::before {
			border-bottom: 1px dotted var(--colors--copy);
			bottom: 0;
			content: "";
			left: 0;
			position: absolute;
			width: 100%;
		}
	}

	.until-sm {
		@media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
			display: none !important;
		}
	}

	.upon-sm {
		@media (max-width: ${({ theme }) => `${theme.breakpoints.sm - 1}px`}) {
			display: none !important;
		}
	}

	.until-md {
		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			display: none !important;
		}
	}

	.upon-md {
		@media (max-width: ${({ theme }) => `${theme.breakpoints.md - 1}px`}) {
			display: none !important;
		}
	}

	${wordpress}
`;
