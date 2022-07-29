import React from 'react'
import { useEffect, useContext } from 'react';
import { useDrag } from "react-dnd";
import { motion, useMotionValue, useVelocity } from "framer-motion"
import Context from "./Context";




function Blockcopy(props) {
  const [keyVal, setKeyVal] = useContext(Context);





  // const midArea = document.getElementById('block')
  // midArea.addEventListener("keydown", (e)=>{
  //   if (e.key === "Delete"){
  //     console.log("delete pressed")
  //   }
  // })

  // const [{isDragging}, drag] = useDrag(()=>({
  //     type: `${props.type}`,
  //     item: {props: props},
  //     collect: (monitor) =>({
  //       isDragging: !!monitor.isDragging(),
  //     })
  //   }))
  // let dragabled

  // if (props.type){
  //     dragabled = drag }else{
  //    dragabled = {}
  //   }

  return (

    <motion.div id="block"

      //  onFocus={()=> console.log("captured", props.id)}
      className={props.class} 
      onClick={(event) => {
        setKeyVal(props.id)
        console.log(keyVal)
        event.stopPropagation()
      }}

      type={"replace"}>{props.operation}</motion.div>


  )
}



export default Blockcopy
