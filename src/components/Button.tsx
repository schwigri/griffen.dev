import React from "react";
import styled from "styled-components";

const Icon = styled("span")`
	align-items: center;
	display: flex;
	height: 100%;

	svg {
		fill: var(--colors--copy);
		height: 100%;
		width: auto;
	}
`;

const Wrapper = styled("button")`
	appearance: none;
	background-color: transparent;
	border: 0;
	color: inherit;
	cursor: pointer;
	font: inherit;
	margin: 0;
	padding: 0;
`;

interface Props {
	"aria-label"?: string;
	className?: string;
	icon?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	value?: string;
}

class Button extends React.Component<Props> {
	render(): React.ReactNode {
		const { className, icon, onClick, value } = this.props;

		return (
			<Wrapper
				aria-label={this.props["aria-label"]}
				className={className}
				onClick={onClick}
			>
				{value && <span>{value}</span>}

				{icon && <Icon>{icon}</Icon>}
			</Wrapper>
		);
	}
}

export { Button };
