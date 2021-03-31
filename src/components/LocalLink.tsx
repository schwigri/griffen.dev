import { GatsbyLinkProps, Link } from "gatsby";
import { StoreAction, StoreState, TStoreAction } from "../types/store.types";
import React from "react";
import { connect } from "react-redux";

interface Props extends GatsbyLinkProps<unknown> {
	menuOpen?: boolean;
	toggleMenu?: () => void;
}

class LocalLink extends React.Component<Props> {
	render(): React.ReactNode {
		const {
			children,
			menuOpen,
			onClick,
			// Errors are caused by passing ref to child link, so we remove it
			// from the props here
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			ref,
			toggleMenu,
			...rest
		} = this.props;

		const closeMenu = (
			e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
		): void => {
			if (menuOpen && toggleMenu) toggleMenu();
			if (onClick) onClick(e);
		};

		return (
			<Link onClick={closeMenu} {...rest}>
				{children}
			</Link>
		);
	}
}

const mapStateToProps = ({ menuOpen }: StoreState): Props => ({
	menuOpen,
	to: "",
});

const mapDispatchToProps = (
	dispatch: ({ type }: TStoreAction) => void
): Props => ({
	to: "",
	toggleMenu: (): void => dispatch({ type: StoreAction.ToggleMenu }),
});

const mergeProps = (
	stateProps: Props,
	dispatchProps: Props,
	ownProps: Props
): Props => ({
	...ownProps,
	menuOpen: stateProps.menuOpen,
	toggleMenu: dispatchProps.toggleMenu,
});

const connectLocalLink = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(LocalLink);

export { connectLocalLink as LocalLink };
