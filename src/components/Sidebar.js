import React from "react";

import { motion } from "framer-motion"

import Block from "./Block";


export default function Sidebar() {


  const eventsList = [
    {
      id: "clickFlag",
      class: "flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
      operation: "When 🏁 Flag is Clicked",
      onTap: "flag"
      
      
    },
    {
      id: "clickSprite",
      class: "flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
      operation: "When this sprite clicked",
      onTap: "sprite"
      
    }]

  const motionList = [{
    id: "move fw",
    class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
    operation: "Move 10 steps forward",
    action: {x: 50, y:0, rotate:0}
  },
  {
    id: "move bw",
    class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
    operation: "Move 10 steps backward",
    action: {x: -50, y:0, rotate:0}
  },
  {
    id: "move up",
    class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
    operation: "Move 10 steps upside",
    action: {x:0, y:-50, rotate:0}
  },
  {
    id: "move dwn",
    class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
    operation: "Move 10 steps dowside",
    action: {x: 0, y:50, rotate:0}
  },
  {
    id: "rotateAntiClock",
    class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
    operation: "Turn <- 15 degrees",
    action: {x: 0, y:0, rotate:-15}
  },
    {
      id: "rotateClockWise",
      class: "flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer",
      operation: "Turn -> 15 degrees",
      action: {x: 0, y:0, rotate:15}

    }

  ]

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      {eventsList.map((item)=> {
        return <Block id={item.id} item={item} class={item.class} operation={item.operation} type={"insert"}/>
      })}


      <div className="font-bold"> {"Motion"} </div>
      {motionList.map((item)=> {
        return <Block item={item} id={item.id} class={item.class} operation={item.operation} type={"insert"}/>
      })}

    </div>
  );
}
