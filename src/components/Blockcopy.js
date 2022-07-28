import React from 'react'
import { useDrag } from "react-dnd";


function Blockcopy(props) {
   
  return (
    <div  className={props.class}>{props.operation}</div>
  )
}



export default Blockcopy
