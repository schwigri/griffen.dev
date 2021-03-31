import React from "react";
import styled from "styled-components";

const Wrapper = styled("aside")`
	align-items: center;
	background-color: var(--colors--background);
	display: flex;
	font-size: 0.9em;
	justify-content: flex-end;
	padding: var(--global--spacing-mini) var(--responsive--spacing);
`;

interface Props {
	children: React.ReactNode;
	className?: string;
}

class TopBar extends React.Component<Props> {
	render(): React.ReactNode {
		const { children, className } = this.props;

		return <Wrapper className={className}>{children}</Wrapper>;
	}
}

export { TopBar };
