import React from "react";
import styled from "styled-components";

const Title = styled("h1")`
	font-size: 2.4em;
	padding: 0 var(--responsive--spacing);
	text-align: center;
`;

const Wrapper = styled("div")`
	margin: var(--global--content-spacing) auto;
`;

interface Props {
	isFrontPage?: boolean;
	title: string;
}

class PageHeader extends React.Component<Props> {
	render(): React.ReactNode {
		const { isFrontPage, title } = this.props;

		return (
			<Wrapper>
				{!isFrontPage && <Title dangerouslySetInnerHTML={{ __html: title }} />}
			</Wrapper>
		);
	}
}

export { PageHeader };
