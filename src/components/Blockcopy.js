import React from 'react'
import MidArea from './MidArea';
import { useDrag, useDrop } from "react-dnd";
import { useState, useEffect } from 'react';


function Blockcopy(props) {
//   const [innerBlock, setInnerBlock] = useState([])

//   useEffect(() => {
//     let innerBlocks = []

//     for (let i = 0; i < innerBlock.length; i++) {
//       innerBlocks.push({ onTap: innerBlock[i].onTap, action: innerBlock[i].action })
//     }
//     props.setFlow(innerBlocks)
//     // console.log(innerBlocks, innerBlock)
//   }, [innerBlock])


//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ["replace", "insertinto"],
//     drop: (item) => addImageToBoard(item.props.item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     })
//   }))

//   const addImageToBoard = (ite) => {
//     console.log(innerBlock)
//     console.log(ite)
//     const temp = {
//       id: ite.id,
//       class: ite.class,
//       operation: ite.operation,
//       action: ite.action,
//       onTap: ite.onTap
//     }
//     setInnerBlock((prv) => {
//       return ([...prv, { ...temp, key: prv.length }])
//     })
//   }



  return (
    <div>
     {props.type === "replace" && <div ref={drop} className={props.class}>{props.operation}</div>}
     {/* { props.type === "insertinto" &&<MidArea ref={drop} className={props.class}>{props.operation} </MidArea>} */}
    </div>


  )
}



export default Blockcopy
