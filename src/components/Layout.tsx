import { Content } from "./Content";
import { Footer } from "./Footer";
import { GlobalStyle } from "../utils/style.util";
import { Header } from "./Header";
import { LangSwitcher } from "./LangSwitcher";
import React from "react";
import { ThemeProvider } from "styled-components";
import { TopBar } from "./TopBar";
import { theme } from "../utils/theme.util";

interface Props {
	children: React.ReactNode;
}

class Layout extends React.Component<Props> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<TopBar className={"upon-md"}>
					<LangSwitcher />
				</TopBar>

				<Header />

				<Content>{children}</Content>

				<Footer />
			</ThemeProvider>
		);
	}
}

export { Layout };
