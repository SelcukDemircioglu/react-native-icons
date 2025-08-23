import * as React from "react";

// TypeScript tanımlamaları
export interface SvgProps extends React.SVGAttributes<SVGElement> {
  xmlns?: string;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  children?: React.ReactNode;
  [key: string]: any;
}

// Mock SVG bileşenleri
const Svg: React.FC<SvgProps> = (props) => React.createElement('svg', props);
const Rect: React.FC<SvgProps> = (props) => React.createElement('rect', props);
const Path: React.FC<SvgProps> = (props) => React.createElement('path', props);
const G: React.FC<SvgProps> = (props) => React.createElement('g', props);
const Circle: React.FC<SvgProps> = (props) => React.createElement('circle', props);
const ClipPath: React.FC<SvgProps> = (props) => React.createElement('clipPath', props);
const Defs: React.FC<SvgProps> = (props) => React.createElement('defs', props);
const Line: React.FC<SvgProps> = (props) => React.createElement('line', props);
const Ellipse: React.FC<SvgProps> = (props) => React.createElement('ellipse', props);
const Polygon: React.FC<SvgProps> = (props) => React.createElement('polygon', props);
const Polyline: React.FC<SvgProps> = (props) => React.createElement('polyline', props);

export interface IconTree {
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
		<Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...data?.attr} {...restProps}>
			{data?.child?.map((item, ind) => {
				const key = Date.now() + ind + "svgitem";
				return <RenderSvgItem key={key} {...item} />;
			})}
		</Svg>
	);
};

export default React.memo(GenIcon);

export type IconType = (props: SvgProps) => React.ReactElement;
