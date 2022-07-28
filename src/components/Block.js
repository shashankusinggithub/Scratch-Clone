import React from 'react'
import { useDrag } from "react-dnd";


function Block(props) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: `${props.type}`,
        item: {props: props},
        collect: (monitor) =>({
          isDragging: !!monitor.isDragging(),
        })
      }))
    let dragable
    let replace 
    if (props.type === "insert"){
      dragable = drag }else{
       dragable = {}
      }
  return (
    <div ref={dragable} className={props.class}>{props.operation}</div>
  )
}



export default Block
