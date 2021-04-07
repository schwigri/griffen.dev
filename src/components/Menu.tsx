import { StaticQuery, graphql } from "gatsby";
import { StoreAction, StoreState, TStoreAction } from "../types/store.types";
import { Button } from "./Button";
import { LangSwitcher } from "./LangSwitcher";
import { LocalLink } from "./LocalLink";
import { MenuIcon } from "./Icons";
import React from "react";
import { SiteContext } from "../context/site.context";
import { TranslationString } from "../constants/translation.constants";
import { WpMenu } from "../types/wordpress.types";
import { connect } from "react-redux";
import { getTranslation } from "../utils/translation.util";
import styled from "styled-components";

const MenuLink = styled(LocalLink)`
	color: inherit;
	display: block;
	font-size: 1.6em;
	font-weight: 600;
	position: relative;
	text-decoration: none;
	transition: 0.3s;

	&[aria-current="page"],
	&:focus,
	&:hover {
		text-decoration: underline;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			transform: translate3d(-1em, 0, 0);
			text-decoration: none;

			[dir="rtl"] & {
				transform: translate3d(1em, 0, 0);
			}
		}

		&::after {
			opacity: 1;
			transform: translate3d(1.25em, 0, 0);

			[dir="rtl"] & {
				transform: translate3d(-1.25em, 0, 0);
			}
		}
	}

	&::after {
		align-items: center;
		content: "←";
		display: none;
		height: 100%;
		opacity: 0;
		position: absolute;
		transform: translate3d(0.75em, 0, 0);
		transition: 0.3s;
		right: 0;
		top: 0;

		[dir="rtl"] & {
			content: "→";
			left: 0;
			right: unset;
			transform: translate3d(-0.75em, 0, 0);
		}

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			display: flex;
		}
	}
`;

const Page = styled("li")`
	margin-bottom: 1em;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin-bottom: 0;
		margin-left: 4em;

		[dir="rtl"] & {
			margin-left: 0;
			margin-right: 4em;
		}
	}
`;

const Pages = styled("ul")`
	display: flex;
	flex-direction: column;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		flex-direction: row;
	}
`;

interface ToggleButtonProps {
	$open: boolean;
}

const ToggleButton = styled(Button)<ToggleButtonProps>`
	overflow: visible;
	position: relative;
	z-index: 2;

	svg {
		transform: ${({ $open }) => ($open ? "rotate(-90deg)" : "rotate(0deg)")};
		transition: 0.3s;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		display: none;
	}
`;

interface WrapperProps {
	$open: boolean;
}

const Wrapper = styled("nav")<WrapperProps>`
	background-color: var(--colors--background);
	box-shadow: ${({ $open }) =>
		$open
			? "0 0 1px var(--colors--separator-shadow)"
			: "0 0 1px rgba(0, 0, 0, 0)"};
	box-sizing: border-box;
	left: 0;
	padding: var(--responsive--spacing);
	position: absolute;
	top: 100%;
	transform: ${({ $open }) =>
		$open ? "translate3d(0, 0, 0)" : "translate3d(0, calc(-100% - 72px), 0)"};
	transition: 0.3s;
	visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
	width: 100%;
	z-index: 1;

	&::before {
		background-color: var(--colors--background);
		content: "";
		height: 2px;
		left: 0;
		position: absolute;
		top: -1px;
		width: 100%;
		z-index: 1;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			display: none;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		box-shadow: none;
		padding: 0;
		position: relative;
		transform: translate3d(0, 0, 0);
		visibility: visible;
		width: auto;
	}
`;

interface Props extends BaseProps {
	menu: WpMenu;
}

class Menu extends React.Component<Props> {
	render(): React.ReactNode {
		const { menu, open, toggleMenu } = this.props;

		return (
			<SiteContext.Consumer>
				{context => (
					<>
						<ToggleButton
							aria-label={getTranslation(
								open ? TranslationString.CloseMenu : TranslationString.OpenMenu,
								context.lang.code
							)}
							icon={<MenuIcon />}
							onClick={toggleMenu}
							$open={!!open}
						/>

						<Wrapper $open={!!open}>
							<Pages role={"list"}>
								{menu.menuItems?.nodes
									?.filter(x => !x.connectedNode?.node?.uri?.includes("http"))
									.map(menuItem => (
										<Page key={menuItem.id}>
											<MenuLink to={menuItem.connectedNode?.node?.uri || "/"}>
												{menuItem.label}
											</MenuLink>
										</Page>
									))}
							</Pages>

							<div className={"until-md"}>
								<LangSwitcher />
							</div>
						</Wrapper>
					</>
				)}
			</SiteContext.Consumer>
		);
	}
}

interface BaseProps {
	open?: boolean;
	toggleMenu?: () => void;
}

function getMenu(props: BaseProps): React.ReactElement {
	const query = graphql`
		query MenuQuery {
			site {
				siteMetadata {
					title
				}
			}

			deMenu: wpMenu(locations: { eq: PRIMARY___DE }) {
				id
				menuItems {
					nodes {
						connectedNode {
							node {
								uri
							}
						}
						id
						label
					}
				}
			}

			enMenu: wpMenu(locations: { eq: PRIMARY }) {
				id
				menuItems {
					nodes {
						connectedNode {
							node {
								uri
							}
						}
						label
						url
					}
				}
			}

			jaMenu: wpMenu(locations: { eq: PRIMARY___JA }) {
				id
				menuItems {
					nodes {
						connectedNode {
							node {
								uri
							}
						}
						label
						url
					}
				}
			}
		}
	`;

	return (
		<SiteContext.Consumer>
			{context => (
				<StaticQuery
					query={query}
					render={data => {
						let menu: WpMenu = data.enMenu;

						switch (context.lang.code) {
							case "AR":
								menu = data.arMenu || data.enMenu;
								break;

							case "DE":
								menu = data.deMenu || data.enMenu;
								break;

							case "JA":
								menu = data.jaMenu || data.enMenu;
								break;

							case "NB":
								menu = data.nbMenu || data.enMenu;
								break;
						}

						return <Menu menu={menu} {...props} />;
					}}
				/>
			)}
		</SiteContext.Consumer>
	);
}

const mapStateToProps = ({ menuOpen }: StoreState): BaseProps => ({
	open: menuOpen,
});

const mapDispatchToProps = (
	dispatch: (action: TStoreAction) => void
): BaseProps => ({
	toggleMenu: () => dispatch({ type: StoreAction.ToggleMenu }),
});

const connectMenu = connect(mapStateToProps, mapDispatchToProps)(getMenu);

export { connectMenu as Menu };
