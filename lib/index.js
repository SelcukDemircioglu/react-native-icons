import * as React from "react"
import Svg, { Rect, Path,G,Circle,ClipPath,Defs,Line,Ellipse,Polygon,Polyline } from "react-native-svg"

const RenderSvgItem = ({attr,tag,child=[]}) => {
    
      const id=React.useId();

      if(tag==="polyline"){
        return <Polyline  {...attr} />;
      }
      if(tag==="polygon"){
        return <Polygon  {...attr} />;
      } 
      if(tag==="path"){
        return <Path  {...attr} />;
      }  
      if(tag==="rect"){
        return <Rect  {...attr} />;
      }  
      if(tag==="g"){
        return (
          <G  {...attr}>
            {child.map((item, ind) => {
              return <RenderSvgItem key={id} {...item} />;
            })}
          </G>
        );
      }
      if(tag==="circle"){
        return <Circle  {...attr} />;
      }
      if(tag==="line"){
        return <Line  {...attr} />;
      }
      if(tag==="ellipse"){
        return <Ellipse  {...attr} />;
      }
      if(tag==="defs"){
        return <Defs  {...attr} >
                 {child.map((item,ind)=>{
                    return <RenderSvgItem key={id}  {...item}  />
                 })}
        </Defs>;
      }
      if(tag==="clipPath"){
        return <ClipPath  {...attr} >
                 {child.map((item,ind)=>{
                    return <RenderSvgItem key={id}  {...item}  />
                 })}
        </ClipPath>;
      }
      return null;
}

 const GenIcon = (props) =>{
   const id=React.useId();
  return(
    <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props?.data?.attr} {...props}>
      {props?.data?.child?.map((item, ind) => {
        return <RenderSvgItem {...item} key={id} />;
      })}
    </Svg>
  );}
 
  export default React.memo(GenIcon);
