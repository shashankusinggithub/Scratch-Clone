import React, { useState, useRef, useEffect } from "react";
import CatSprite from "./CatSprite";
import { motion, useDragControls, useAnimation, animate } from "framer-motion"


export default function PreviewArea(props) {
  const controller = new AbortController()
  const controls = useDragControls()
  const [isActive, setIsActive] = React.useState(false);
  // const [location, setLocation] = useState({})
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [R, setR] = useState(0)
  const [urlSprite, setUrl] = useState("https://www.seekpng.com/png/full/19-191322_scratch-cat-the-game-pose-as-you-know.png")

  let flag = false
  let cancel = false

  let sprite = false

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


  function handleStartFlag() {
    if (props.flow[0].onTap === "flag") {
      cancel = false
      flag = true
      forloop()
    }
  }

  function handleStartSprite() {
    if (props.flow[0].onTap === "sprite") {
      sprite = true
      forloop()
    }
  }
  function handleStop() {
    console.log("tryed to cancell")
    flag = false
    sprite = false
    cancel = true
  }


  let promise = []
  const forloop = async () => {

    try {
      let Xp = X
      let Yp = Y
      let Rp = R
      let temp = { x: Xp, y: Yp, rotate: Rp }
      let temp1
      console.log("started", flag, sprite)
      for (const item of props.flow) {
        if (cancel === true) {
          throw Error("user stoped")
        }
        await new Promise(resolve => setTimeout(resolve), 500)
        console.log(item)
        if (flag || sprite) {
          if (item.action) {
            // console.log("started")
            Yp = Yp + item.action.y
            Rp = Rp + item.action.rotate
            Xp = Xp + item.action.x
            temp = { x: Xp, y: Yp, rotate: Rp }
            // console.log(temp)
            if (cancel) {
              throw Error("user stoped")
            }
            temp1 = await animation.start(temp)
            promise.push(temp1)
            setX(Xp)
            setY(Yp)
            setR(Rp)
          }
          else if (item.array) {
            for (let i = 1; i <= item.repeat; i++) {
              temp1 = await insideforloop(item.array, Xp, Yp, Rp)
              console.log(temp1)

              Xp = temp1.x
              Yp = temp1.y
              Rp = temp1.rotate
              setX(Xp)
              setY(Yp)
              setR(Rp)
            }
          }
          if (cancel) {
            throw Error("user stoped")
          }
        }
        else {
          break
        }

      }
      flag = false
      sprite = false

    }
    catch (error) {
      console.log(error)
    }
  }

  const insideforloop = async (insidefor, Xp, Yp, Rp) => {
    let temp
    for (const item of insidefor) {
      // await new Promise(resolve => setTimeout(resolve, 500))
      if (item.action) {
        // console.log("started for")
        Yp = Yp + item.action.y
        Rp = Rp + item.action.rotate
        Xp = Xp + item.action.x
        temp = { x: Xp, y: Yp, rotate: Rp }
        // console.log(temp)
        await animation.start(temp)
      }
    }
    setX(Xp)
    setY(Yp)
    setR(Rp)

    return (temp)
  }




  const animation = useAnimation();




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


  function handleChange(event) {
    const value = event.target.value
    console.log(value)
    setUrl(value)

  }


  return (

    <div
      id='parent-id'
      className="flex-none h-full w-full float-leftS overflow-x-auto  overflow-y-auto p-2 "
    >
      <div className="items-end  space-x-10 float-left flex flex-row  absolute">

        <img
          className="w-16  "
          src="https://w7.pngwing.com/pngs/186/520/png-transparent-computer-icons-flag-icon-design-various-actions-miscellaneous-angle-flag-thumbnail.png"
          onClick={handleStartFlag}
        />

        <img className="h-16"
          onClick={() => animation.stop()}
          src="https://www.clipartmax.com/png/full/218-2181389_stop-it-simple-multicolor-icon-stop-traffic-sign.png" />
        <input onChange={handleChange} type="text" placeholder="Submit your IMG url" className='text-blue-900 border-4 border-indigo-500/100 text-lg space-x-20 w-90 h-10 mx-6 p-2 rounded-lg'></input>
      </div>
      <br></br>

      <motion.img
        
        layout
        id='child-id'
        ref={ref}
        // initial={false}
        className="h-28 m-14"
        //  onClick={() => setIsActive(!isActive)}
        dragMomentum={false}
        drag
        onTap={forloop}
        onDragEnd={updatePosition}
        animate={animation}

        transition={{ duration: 0.5, delay: 0.1 }}
        onAnimationIteration={updatePosition}
        onClick={handleStartSprite}

        src={urlSprite}></motion.img>



    </div>
    // </div >
  );
}
