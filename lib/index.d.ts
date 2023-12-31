import * as React from "react";
import { SvgProps } from "react-native-svg";
export interface IconTree extends SvgProps {
    tag: string;
    attr: {
        [key: string]: string;
    };
    child: IconTree[];
}


export declare type IconType = (props: SvgProps) => JSX.Element;
export declare function IconBase(props: SvgProps & {
    attr?: Record<string, string>;
}): JSX.Element;

export default function GenIcon(data: IconTree):JSX.Element;
