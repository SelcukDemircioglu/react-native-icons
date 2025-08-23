import * as React from "react";
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
export interface IconTree {
    tag: string;
    attr: {
        [key: string]: any;
    };
    child?: IconTree[];
}
interface GenIconProps extends SvgProps {
    data?: IconTree;
}
declare const _default: React.NamedExoticComponent<GenIconProps>;
export default _default;
export type IconType = (props: SvgProps) => React.ReactElement;
//# sourceMappingURL=index.d.ts.map