import "styled-components";

declare module "styled-components" {
	interface DefaultTheme {
		breakpoints: {
			sm: number;
			md: number;
		};
	}
}
