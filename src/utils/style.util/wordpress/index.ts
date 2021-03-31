import { columns, images, latestPosts } from "./blocks";
import { css } from "styled-components";

export const wordpress = css`
	// WordPress Core styles
	ul,
	li,
	dl,
	dt,
	dd,
	blockquote,
	figure,
	fieldset,
	form,
	legend,
	textarea,
	pre,
	iframe,
	hr {
		margin: 0;
		padding: 0;
	}

	.alignnone {
		margin-left: var(--responsive--spacing);
		margin-right: var(--responsive--spacing);
	}

	.aligncenter {
		margin: var(--global--content-spacing) auto;
	}

	.alignright {
		float: right;
		margin: var(--global--content-spacing) 0 var(--global--content-spacing)
			var(--responsive--spacing);
	}

	.alignleft {
		float: left;
		margin: var(--global--content-spacing) var(--responsive--spacing)
			var(--global--content-spacing) 0;
	}

	.alignwide {
		margin: var(--global--content-spacing) auto;
		max-width: var(--global--content-width);
		padding: 0 var(--responsive--spacing);
	}

	.screen-reader-text {
		border: 0;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: isnet(50%);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		word-wrap: normal;

		&:focus {
			background-color: #eee;
			clip: auto;
			clip-path: none;
			color: #444;
			display: block;
			font-size: 1em;
			height: auto;
			left: 5px;
			line-height: normal;
			padding: 1em;
			text-decoration: none;
			top: 5px;
			width: auto;
			z-index: 9;
		}
	}

	.has-text-align-center {
		text-align: center;
	}

	// Blocks
	${images}
	${columns}
	${latestPosts}
`;
