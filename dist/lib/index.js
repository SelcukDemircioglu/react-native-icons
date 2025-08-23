import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
// Mock SVG bileşenleri
const Svg = (props) => React.createElement('svg', props);
const Rect = (props) => React.createElement('rect', props);
const Path = (props) => React.createElement('path', props);
const G = (props) => React.createElement('g', props);
const Circle = (props) => React.createElement('circle', props);
const ClipPath = (props) => React.createElement('clipPath', props);
const Defs = (props) => React.createElement('defs', props);
const Line = (props) => React.createElement('line', props);
const Ellipse = (props) => React.createElement('ellipse', props);
const Polygon = (props) => React.createElement('polygon', props);
const Polyline = (props) => React.createElement('polyline', props);
const RenderSvgItem = ({ attr = {}, tag, child = [] }) => {
    if (tag === "polyline") {
        return _jsx(Polyline, { ...attr });
    }
    if (tag === "polygon") {
        return _jsx(Polygon, { ...attr });
    }
    if (tag === "path") {
        return _jsx(Path, { ...attr });
    }
    if (tag === "rect") {
        return _jsx(Rect, { ...attr });
    }
    if (tag === "g") {
        return (_jsx(G, { ...attr, children: child.map((item, ind) => {
                const key = Date.now() + ind + "g";
                return _jsx(RenderSvgItem, { ...item }, key);
            }) }));
    }
    if (tag === "circle") {
        return _jsx(Circle, { ...attr });
    }
    if (tag === "line") {
        return _jsx(Line, { ...attr });
    }
    if (tag === "ellipse") {
        return _jsx(Ellipse, { ...attr });
    }
    if (tag === "defs") {
        return (_jsx(Defs, { ...attr, children: child.map((item, ind) => {
                const key = Date.now() + ind + "Defs";
                return _jsx(RenderSvgItem, { ...item }, key);
            }) }));
    }
    if (tag === "clipPath") {
        return (_jsx(ClipPath, { ...attr, children: child.map((item, ind) => {
                const key = Date.now() + ind + "clipPath";
                return _jsx(RenderSvgItem, { ...item }, key);
            }) }));
    }
    return null;
};
const GenIcon = (props) => {
    var _a;
    const { data, ...restProps } = props;
    return (_jsx(Svg, { width: 40, height: 40, xmlns: "http://www.w3.org/2000/svg", ...data === null || data === void 0 ? void 0 : data.attr, ...restProps, children: (_a = data === null || data === void 0 ? void 0 : data.child) === null || _a === void 0 ? void 0 : _a.map((item, ind) => {
            const key = Date.now() + ind + "svgitem";
            return _jsx(RenderSvgItem, { ...item }, key);
        }) }));
};
export default React.memo(GenIcon);
//# sourceMappingURL=index.js.map