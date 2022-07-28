import React, { useState, useRef, useEffect } from "react";
import CatSprite from "./CatSprite";
import { motion, useDragControls, useAnimation, animate } from "framer-motion"


export default function PreviewArea(props) {
  const controls = useDragControls()
  const [isActive, setIsActive] = React.useState(false);
  // const [location, setLocation] = useState({})
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [R, setR] = useState(0)
  const ref = useRef()

  function updatePosition() {
    var parentPos = document.getElementById('parent-id').getBoundingClientRect(),
      childPos = document.getElementById('child-id').getBoundingClientRect(),
      relativePos = {};

    relativePos.top = childPos.top - parentPos.top,
      relativePos.right = childPos.right - parentPos.right,
      relativePos.bottom = childPos.bottom - parentPos.bottom,
      relativePos.left = childPos.left - parentPos.left;
    console.log(relativePos);
    // console.log(ref.current.getBoundingClientRect())
    setX(relativePos.left)
    setY(relativePos.top)
  }




  const forloop = async () => {
    let Xp = X
    let Yp = Y
    let Rp = R
    let temp = { x: Xp, y: Yp, rotate: Rp }
    let temp1
    for (const item of props.flow) {
      await new Promise(resolve => setTimeout(resolve))
      console.log(item)
      if (item.action) {
        // console.log("started")
        Yp = Yp + item.action.y
        Rp = Rp + item.action.rotate
        Xp = Xp + item.action.x
        temp = { x: Xp, y: Yp, rotate: Rp }
        console.log(temp)
        await animation.start(temp)
        setX(Xp)
        setY(Yp)
        setR(Rp)
      }
      else if (item.array) {
        temp1 = await insideforloop(item.array, Xp, Yp, Rp)
        Xp = temp1.x
        Yp = temp1.y
        Rp = temp1.rotate
        setX(Xp)
        setY(Yp)
        setR(Rp)
      }
    }

  }

  const insideforloop = async (insidefor, Xp, Yp, Rp) => {
    let temp
    for (const item of insidefor) {
      await new Promise(resolve => setTimeout(resolve))
      if (item.action) {
        console.log("started for")
        Yp = Yp + item.action.y
        Rp = Rp + item.action.rotate
        Xp = Xp + item.action.x
        temp = { x: Xp, y: Yp, rotate: Rp }
        console.log(temp)
        await animation.start(temp)
      }
    }
    setX(Xp)
    setY(Yp)
    setR(Rp)

    return (temp)
  }




  const animation = useAnimation();

  async function flowing() {
    let Xp = X
    let Yp = Y
    let Rp = R
    props.flow.forEach(async item => {
      // setX((prv) => prv + item.action.x)
      // setY((prv) => prv + item.action.y)
      // setR((prv) => prv + item.action.rotate)
      // const item = props.flow[i]
      Yp = Y + item.action.y
      Rp = R + item.action.rotate
      Xp = X + item.action.x
      const temp = { x: Xp, y: Yp, rotate: Rp, delay: 1 }
      await forloop(temp)

    })
  }


  // const sequence1 = async _ => {
  //   console.log('Start')
  //   let Xp = X
  //   let Yp = Y
  //   let Rp = R

  //   let allpromis = () => {for  (const item of props.flow) {
  //     // setX((prv) => prv + item.action.x)
  //     // setY((prv) => prv + item.action.y)
  //     // setR((prv) => prv + item.action.rotate)
  //     Yp = Yp + item.action.y
  //     Rp = Rp + item.action.rotate
  //     Xp = Xp + item.action.x

  //     await animation.start({ x: X, y: Y, rotate: R, delay: 0.5 })}}

  //    setX((prv) => prv + Xp)
  //     setY((prv) => prv + Yp)
  //     setR((prv) => prv + Rp)

  //     allpromis()





  // }}



  // async function sequence() {
  //   // console.log("checking")
  //   // await animation.start({ x: 10, y: 0, rotate: R, delay: 0.5 })
  //   // await animation.start({ x: 10, y: 30, rotate: R, delay: 0.5 })
  //   // await animation.start({ x: 40, y: 30, rotate: R, delay: 0.5 })
  //   // await animation.start({ x: 40, y: 0, rotate: R, delay: 0.5 })



  //   for await (const item of props.flow) {
  //     await animation.start({ x: X, y: Y, rotate: R, delay: 0.5 }).then(() => {
  //       console.log(console.log({ x: X, y: Y, rotate: R }))
  //       setX((prv) => prv + item.action.x)
  //       setY((prv) => prv + item.action.y)
  //       setR((prv) => prv + item.action.rotate)
  //     })
  //   }
  //   console.log('I will wait')

  //   // await flowing()

  //   // while (val.next()!== true){
  //   //   console.log(val)
  //   //   val = val.next()
  //   // }


  // }


  return (

    <div
      id='parent-id'
      className="flex-none h-full overflow-x-auto  overflow-y-auto p-2 w-full"
    >

      <motion.img
        id='child-id'
        ref={ref}
        // initial={false}
        className="h-20 absolute"
        //  onClick={() => setIsActive(!isActive)}
        dragMomentum={false}
        drag
        onTap={forloop}
        onDragEnd={updatePosition}
        animate={animation}
        transition={{ duration: 0.5, delay: 0 }}
        onAnimationIteration={updatePosition}

        src="https://image.pngaaa.com/370/3253370-middle.png"></motion.img>


    </div>
    // </div >
  );
}
