import React,{memo} from "react";

// TypeScript tanımlamaları
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, Path, Polygon, Polyline, Rect, SvgProps } from "react-native-svg";
export interface IconTree extends SvgProps {
	tag: string;
	attr: {
		[key: string]: any;
	};
	child?: IconTree[];
}

interface RenderSvgItemProps {
	attr?: Record<string, any>;
	tag: string;
	child?: IconTree[];
}

const RenderSvgItem: React.FC<RenderSvgItemProps> = ({ attr = {}, tag, child = [] }) => {
	if (tag === "polyline") {
		return <Polyline {...attr} />;
	}
	if (tag === "polygon") {
		return <Polygon {...attr} />;
	}
	if (tag === "path") {
		return <Path {...attr} />;
	}
	if (tag === "rect") {
		return <Rect {...attr} />;
	}
	if (tag === "g") {
		return (
			<G {...attr}>
				{child.map((item, ind) => {
					const key = Date.now() + ind + "g";
					return <RenderSvgItem key={key} {...item} />;
				})}
			</G>
		);
	}
	if (tag === "circle") {
		return <Circle {...attr} />;
	}
	if (tag === "line") {
		return <Line {...attr} />;
	}
	if (tag === "ellipse") {
		return <Ellipse {...attr} />;
	}
	if (tag === "defs") {
		return (
			<Defs {...attr}>
				{child.map((item, ind) => {
					const key = Date.now() + ind + "Defs";
					return <RenderSvgItem key={key} {...item} />;
				})}
			</Defs>
		);
	}
	if (tag === "clipPath") {
		return (
			<ClipPath {...attr}>
				{child.map((item, ind) => {
					const key = Date.now() + ind + "clipPath";
					return <RenderSvgItem key={key} {...item} />;
				})}
			</ClipPath>
		);
	}
	return null;
};

interface GenIconProps extends SvgProps {
	data?: IconTree;
}

const GenIcon: React.FC<GenIconProps> = (props) => {
	const { data, ...restProps } = props;

	return (
		<Svg width={40} height={40} {...data?.attr} {...restProps}>
			{data?.child?.map((item, ind) => {
				const key = Date.now() + ind + "svgitem";
				return <RenderSvgItem key={key} {...item} />;
			})}
		</Svg>
	);
};

export default React.memo(GenIcon);

export type IconType = (props: SvgProps) => React.ReactElement;
