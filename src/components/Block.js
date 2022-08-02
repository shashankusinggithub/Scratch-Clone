import React from 'react'
import { useDrag } from "react-dnd";


function Block(props) {
    const [{isDragging}, drag] = useDrag(()=>({
        type: `${props.type}`,
        item: {props: props},
        collect: (monitor) =>({
<<<<<<< HEAD
          isDragging: !!monitor.isDragging(),
        })
      }))
    let dragable
    
    if (props.type){
=======
          
          isDragging: !!monitor.isDragging(),
        })
      }))

    let dragable
    
    if (props.type){
      // console.log(props)
>>>>>>> master
      dragable = drag }else{
       dragable = {}
      }
  return (
<<<<<<< HEAD
    <div ref={dragable} className={`${props.class} h-16 rounded-lg border-2 -space-y-2 items-center `}>{props.operation}</div>
  )
}



=======
    <div ref={dragable} className={`${props.class} h-11 shadow-lg rounded-lg border-2 -space-y-2 items-center `}>{props.operation}</div>
  )
}

>>>>>>> master
export default Block
