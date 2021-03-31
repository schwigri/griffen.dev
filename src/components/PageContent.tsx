import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
	margin: var(--global--content-spacing) 0;

	& > p {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--global--copy-width);
		padding: 0 var(--responsive--spacing);
	}
`;

interface Props {
	content: React.ReactNode | string;
}

class PageContent extends React.Component<Props> {
	render(): React.ReactNode {
		const { content } = this.props;

		if ("string" === typeof content)
			return <Wrapper dangerouslySetInnerHTML={{ __html: content }} />;

		return <Wrapper>{content}</Wrapper>;
	}
}

export { PageContent };
