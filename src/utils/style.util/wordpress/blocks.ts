import { css } from "styled-components";

export const columns = css`
	.wp-block-columns {
		display: flex;
		flex-wrap: wrap;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			flex-wrap: nowrap;
		}
	}

	.wp-block-column {
		box-sizing: border-box;
		flex-grow: 0;
		min-width: 0;
		word-break: break-word;
		overflow-wrap: break-word;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			flex-basis: 0;
			flex-grow: 1;

			&:not(:first-child) {
				margin-left: var(--responsive--spacing);
			}
		}

		&.is-vertically-aligned-center {
			align-self: center;
		}
	}
`;

export const images = css`
	.wp-block-image {
		figcaption {
			color: var(--colors--subtitle);
			font-family: var(--fonts--heading);
			font-size: 0.9em;
			margin-top: 0.5em;
			text-align: center;

			&:not(:lang(ja)) {
				font-style: italic;
			}
		}
	}

	.is-style-rounded {
		& > .gatsby-image-wrapper {
			border-radius: 0.5em;
			box-shadow: 0 0 1px var(--colors--separator-shadow);
			overflow: hidden;
		}
	}
`;

export const latestPosts = css`
	.wp-block-latest-posts {
		display: flex;
		flex-wrap: nowrap;
		list-style: none;
		margin: 0;
		overflow: auto;
		padding: 0;
		width: 100%;

		& > li {
			background: salmon;
			border-radius: 0.5em;
			box-shadow: 0 0 1px var(--colors--separator-shadow);
			flex-shrink: 0;
			margin: 0 var(--responsive--spacing);
			overflow: hidden;
			width: 75%;

			&:first-child:last-child {
				width: calc(200% - (2 * var(--responsive--spacing)));
			}
		}
	}
`;
