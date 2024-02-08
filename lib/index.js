import * as React from "react"
import Svg, { Rect, Path,G,Circle,ClipPath,Defs,Line,Ellipse,Polygon,Polyline } from "react-native-svg"

const RenderSvgItem = ({attr,tag,child=[]}) => {
    
   
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
              const key=(Date.now()+ind)+"g"
              return <RenderSvgItem key={key} {...item} />;
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
                  const key=(Date.now()+ind)+"Defs"
                    return <RenderSvgItem key={key}  {...item}  />
                 })}
        </Defs>;
      }
      if(tag==="clipPath"){
        return <ClipPath  {...attr} >
                 {child.map((item,ind)=>{
                  const key=(Date.now()+ind)+"clipPath"
                    return <RenderSvgItem key={key}  {...item}  />
                 })}
        </ClipPath>;
      }
      return null;
}

 const GenIcon = (props) =>{
 
  return(
    <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props?.data?.attr} {...props}>
      {props?.data?.child?.map((item, ind) => {

          const key=(Date.now()+ind)+"svgitem"
        return <RenderSvgItem {...item} key={key} />;
      })}
    </Svg>
  );}
 
  export default React.memo(GenIcon);
