import React from "react";
import styled from "styled-components";

const Container = styled("div")`
	margin: calc(var(--responsive--spacing) * -1) 0;
`;

const Wrapper = styled("main")`
	background-color: var(--colors--background);
	padding: var(--responsive--spacing) 0;
`;

interface Props {
	children: React.ReactNode;
}

class Content extends React.Component<Props> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<Wrapper>
				<Container>{children}</Container>
			</Wrapper>
		);
	}
}

export { Content };
