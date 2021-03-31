import { Branding } from "./Branding";
import { Menu } from "./Menu";
import React from "react";
import styled from "styled-components";

const Wrapper = styled("header")`
	align-items: center;
	background-color: var(--colors--background);
	box-shadow: 0 0 1px var(--colors--separator-shadow);
	display: flex;
	justify-content: space-between;
	padding: var(--responsive--spacing);
	position: sticky;
	top: 0;
	z-index: 1;
`;

class Header extends React.Component {
	render(): React.ReactNode {
		return (
			<Wrapper>
				<Branding />

				<Menu />
			</Wrapper>
		);
	}
}

export { Header };
