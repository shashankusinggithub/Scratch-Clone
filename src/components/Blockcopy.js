import React from 'react'
import { useDrag } from "react-dnd";



function Blockcopy(props) {
  
    const [{isDragging}, drag] = useDrag(()=>({
        type: `${props.type}`,
        item: {props: props},
        collect: (monitor) =>({
          isDragging: !!monitor.isDragging(),
        })
      }))
    let dragabled
    
    if (props.type){
        dragabled = drag }else{
       dragabled = {}
      }

  return (
    
     <div  className={props.class} type={"replace"}>{props.operation}</div>
     
    
  )
}



export default Blockcopy
