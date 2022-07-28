import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Blockcopy from "./Blockcopy";
import { Reorder,  useDragControls } from "framer-motion"
import ControlBlocks from "./ControlBlocks"


export default function MidArea(props) {
  const [board, setBoard] = useState([])
  
  const dragControls = useDragControls();

  useEffect(()=>{
    let flowAdding = []
    
    for (let i = 0; i < board.length; i++) {
      
      flowAdding.push({onTap:board[i].onTap, action : board[i].action, array : board[i].array })
    }
    props.setFlow(flowAdding)
    // console.log(flowAdding, props.flow)



  },[board])


  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({

    accept: ["insert","replace", "insertinto", "replaceinto"],
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
        if (didDrop ) {
          return}
      addImageToBoard(item.props)

    
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  }))

  const addImageToBoard = (ite) => {   
    console.log(ite)
    const temp = {
      id: ite.id,
      class: ite.class,
      operation: ite.operation,
      action : ite.item.action,
      onTap: ite.onTap,
      type: ite.type,
      array : ite.item.array
    }  
    setBoard((prv) => {
   
      return ([...prv, { ...temp, key: prv.length }])
    })
  }

  return <div
    ref={drop} className="w-full flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
    {"mid area"}

    <Reorder.Group axis="y" values={board} onReorder={setBoard}>
      {board.map((item) => (
        <Reorder.Item key={item.key} value={item}  >
          {item.type === "insertinto" && <ControlBlocks id={item.key} class={`w-60 h-30 max-h-auto  ${item.class}`} operation={item.operation} setFlow={props.setFlow}
          type={"replace"} flow={props.flow} setBoard={setBoard}/>}
          {item.type === "insert" && <Blockcopy  id={item.key} class={item.class} operation={item.operation} setFlow={props.setFlow}
          type={"replace"} flow={props.flow}>{item.type}</Blockcopy>}
        </Reorder.Item>
      ))}
    </Reorder.Group>

  </div>;
}
