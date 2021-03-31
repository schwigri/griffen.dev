import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
	height?: number;
	width?: number;
	xLink?: boolean;
}

class Icon extends React.Component<Props> {
	render(): React.ReactNode {
		const { children, className, height = 24, width = 24, xLink } = this.props;

		return (
			<svg
				className={className}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				width={width}
				xmlns={"http://www.w3.org/2000/svg"}
				xmlnsXlink={xLink ? "http://www.w3.org/1999/xlink" : undefined}
			>
				{children}
			</svg>
		);
	}
}

export { Icon };

export const MenuIcon = (): React.ReactElement => (
	<Icon>
		<path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
	</Icon>
);
