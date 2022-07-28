import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Blockcopy from "./Blockcopy";
import { Reorder } from "framer-motion"


export default function MidArea(props) {
  const [board, setBoard] = useState([])


  useEffect(()=>{
    let map1 = []
    
    for (let i = 0; i < board.length; i++) {
      map1.push({onTap:board[i].onTap, action : board[i].action})
    }
    props.setFlow(map1)
    console.log(map1, board)


  },[board])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["insert", "insertinto"],
    drop: (item) => addImageToBoard(item.props.item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addImageToBoard = (ite) => {   
    console.log(ite)
    const temp = {
      id: ite.id,
      class: ite.class,
      operation: ite.operation,
      action : ite.action,
      onTap: ite.onTap
    }  
    setBoard((prv) => {
      return ([...prv, { ...temp, key: prv.length }])
    })
  }

  return <div
    ref={drop} className="w-60 flex-none h-full ">
    {"mid area"}

    <Reorder.Group axis="y" values={board} onReorder={setBoard}>
      {board.map((item) => (
        <Reorder.Item key={item.key} value={item}>
          <Blockcopy item={item} id={item.key} class={item.class} operation={item.operation} setFlow={props.setFlow}
          type={props.type === "insertinto"? "insertinto" :"replace"} />
        </Reorder.Item>
      ))}
    </Reorder.Group>

  </div>;
}
