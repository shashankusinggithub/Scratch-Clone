import React from 'react'
import Blockcopy from "./Blockcopy";
import { useDrag, useDrop } from "react-dnd";
import { useState, useEffect } from 'react';
import { Reorder,  useDragControls } from "framer-motion"



function ControlBlock(props) {

  const [innerBlock, setInnerBlock] = useState([])

  useEffect(() => {
    let inner = []

    for (let i = 0; i < innerBlock.length; i++) {
      inner.push({ onTap: innerBlock[i].onTap, action: innerBlock[i].action })
    }

    props.setBoard((prv)=>{
      const index = prv.findIndex(object => {
        return object.key === props.id;
      });
      console.log("innerbox, board",index, prv)

      prv[index].array = inner

      return ([...prv])
    })
    // setInnerBlock(inner)
    // console.log(innerBlocks, innerBlock)
  }, [innerBlock])


  const [{ isOver }, dropE] = useDrop(() => ({
    accept: ["insert", "replace", "replaceinto"],
    drop: (item) => addImageToBoard(item.props),
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
      action: ite.item.action,
      onTap: ite.onTap,
      type: ite.type,
      array : ite.item.array  

    }
    setInnerBlock((prv) => {   
      console.log(temp)
      return ([...prv, { ...temp, key: (props.flow.length +1)*100 + prv.length +1}])
    })
    // const index = props.flow.findIndex(object => {
    //   return object.id === props.id;
    // });

    props.setFlow((prv)=>{
      // console,log(prv)
      // console.log(props.id, "propsid", props.flow)
      // prv[index].array  =  innerBlock
      return (prv)      
    })


  }

  return (
    <div ref={dropE} className={props.class} >{props.operation} {props.id}
      <Reorder.Group axis="y" values={innerBlock} onReorder={setInnerBlock} >
        {innerBlock.map((item) => (
          <Reorder.Item key={item.key} value={item} >
            <Blockcopy id={item.key} class={item.class} operation={item.operation} setFlow={props.setFlow}
              type={"replaceinto"} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}



export default ControlBlock