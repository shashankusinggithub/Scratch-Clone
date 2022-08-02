import React, { useState, useRef, useEffect } from "react";
<<<<<<< HEAD
import CatSprite from "./CatSprite";
import { motion, useDragControls, useAnimation, animate } from "framer-motion"


export default function PreviewArea(props) {
  const controller = new AbortController()
  const controls = useDragControls()
  const [isActive, setIsActive] = React.useState(false);
=======
import { motion, useAnimation, } from "framer-motion";

export default function PreviewArea(props) {

>>>>>>> master
  // const [location, setLocation] = useState({})
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [R, setR] = useState(0)
  const [urlSprite, setUrl] = useState("https://www.seekpng.com/png/full/19-191322_scratch-cat-the-game-pose-as-you-know.png")
<<<<<<< HEAD

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
=======
  const [waiting, setWaiting] = useState(false)
  const [forlooprunning, setForlooprunning] = useState(false)
  const animation = useAnimation();

  let flag = false
  let sprite = false

  // update the location after drag
  function updatePosition() {
    let relativePos = { top: 0, bottom: 0, left: 0, right: 0 }
    const parentPos = document.getElementById('parent-id').getBoundingClientRect()
    const childPos = document.getElementById('child-id').getBoundingClientRect()
    relativePos.top = childPos.top - parentPos.top
    relativePos.right = childPos.right - parentPos.right
    relativePos.bottom = childPos.bottom - parentPos.bottom
    relativePos.left = childPos.left - parentPos.left
    console.log(relativePos);
    // console.log(ref.current.getBoundingClientRect())
    setX(relativePos.left - 70)
    setY(relativePos.top - 80)
>>>>>>> master
  }


  function handleStartFlag() {
<<<<<<< HEAD
    if (props.flow[0].onTap === "flag") {
      cancel = false
      flag = true
      forloop()
=======
    {
      if (props.flow[0].onTap == "flag") {
        flag = true
        //  console.log(props.flow[0], "best", forlooprunning, waiting)
        if (!waiting && !forlooprunning) {
          forloop()
        }
      }
>>>>>>> master
    }
  }

  function handleStartSprite() {
<<<<<<< HEAD
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
=======
    {
      if (props.flow[0].onTap == "sprite") { sprite = true }
      if (!waiting && !forlooprunning) {
        forloop()
      }
    }
  }


  // to hold the loop untill button is pressed
  let waitForPressResolve;

  function waitForPress() {
    console.log("waitfor pressed");
    return new Promise(resolve => waitForPressResolve = resolve);
  }

  function btnResolver() {
    console.log("button solver");
    if (waitForPressResolve) waitForPressResolve();
  }

  async function doIt(name) {

    const btn = document.getElementById(name);
    btn.addEventListener('click', btnResolver);

    console.log("before wait");
    await waitForPress();
    console.log("after wait")
    btn.removeEventListener('click', btnResolver);
    // console.log('Finished');
  }



  let promise = []
  const forloop = async () => {
    setForlooprunning(true)
>>>>>>> master

    try {
      let Xp = X
      let Yp = Y
      let Rp = R
      let temp = { x: Xp, y: Yp, rotate: Rp }
      let temp1
<<<<<<< HEAD
      console.log("started", flag, sprite)
      for (const item of props.flow) {
        if (cancel === true) {
          throw Error("user stoped")
        }
        await new Promise(resolve => setTimeout(resolve), 500)
        console.log(item)
=======
      for (const item of props.flow) {
        // console.log("started", flag, sprite, item)

        if (item.onTap) {
          if (item.onTap === "flag" && item !== props.flow[0]) {
            setWaiting(true)
            await doIt("flag")
            continue
          }

          if (item.onTap === "sprite" && item !== props.flow[0]) {
            setWaiting(true)
            await doIt('child-id')
            continue
          }
          setWaiting(false)
        }
        // await new Promise(resolve => setTimeout(resolve), 500)
        // console.log(item)
>>>>>>> master
        if (flag || sprite) {
          if (item.action) {
            // console.log("started")
            Yp = Yp + item.action.y
            Rp = Rp + item.action.rotate
            Xp = Xp + item.action.x
            temp = { x: Xp, y: Yp, rotate: Rp }
            // console.log(temp)
<<<<<<< HEAD
            if (cancel) {
              throw Error("user stoped")
            }
            temp1 = await animation.start(temp)
            promise.push(temp1)
            setX(Xp)
            setY(Yp)
            setR(Rp)
=======
            temp1 = await animation.start(temp)
            promise.push(temp1)

>>>>>>> master
          }
          else if (item.array) {
            for (let i = 1; i <= item.repeat; i++) {
              temp1 = await insideforloop(item.array, Xp, Yp, Rp)
<<<<<<< HEAD
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

=======
              // console.log(temp1)
              Xp = temp1.x
              Yp = temp1.y
              Rp = temp1.rotate
            }
          }

        }
      }
      setX(Xp)
      setY(Yp)
      setR(Rp)
      flag = false
      sprite = false
      setWaiting(false)
      setForlooprunning(false)
      // console.log("finished for", waiting, forlooprunning)
>>>>>>> master
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
<<<<<<< HEAD

=======
>>>>>>> master
    return (temp)
  }


<<<<<<< HEAD


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
=======
  function handleChange(event) {
    const value = event.target.value
    // console.log(value)
>>>>>>> master
    setUrl(value)

  }

<<<<<<< HEAD
=======
  function handleStop() {
    animation.stop()
    flag = false
    sprite = false
    setWaiting(false)
    setForlooprunning(false)
    // console.log("Stoped by user", waiting, forlooprunning)

  }

>>>>>>> master

  return (

    <div
      id='parent-id'
<<<<<<< HEAD
      className="flex-none h-full w-full float-leftS overflow-x-auto  overflow-y-auto p-2 "
    >
      <div className="items-end  space-x-10 float-left flex flex-row  absolute">

        <img
          className="w-16  "
=======
      className="flex-none whitespace-nowrap h-full w-full  overflow-x-scroll  p-2 "
    >
      <div className="  items-end float-left flex flex-row space-x-6 absolute right-2">

        <img
          id="flag"
          className="w-16 shadow-lg "
>>>>>>> master
          src="https://w7.pngwing.com/pngs/186/520/png-transparent-computer-icons-flag-icon-design-various-actions-miscellaneous-angle-flag-thumbnail.png"
          onClick={handleStartFlag}
        />

<<<<<<< HEAD
        <img className="h-16"
          onClick={() => animation.stop()}
          src="https://www.clipartmax.com/png/full/218-2181389_stop-it-simple-multicolor-icon-stop-traffic-sign.png" />
        <input onChange={handleChange} type="text" placeholder="Submit your IMG url" className='text-blue-900 border-4 border-indigo-500/100 text-lg space-x-20 w-90 h-10 mx-6 p-2 rounded-lg'></input>
=======
        <img className="h-16 shadow-lg"
          onClick={handleStop}
          src="https://www.clipartmax.com/png/full/218-2181389_stop-it-simple-multicolor-icon-stop-traffic-sign.png" />
        <input onChange={handleChange} type="text" placeholder="Submit your IMG url" className='text-blue-900 border-4 border-indigo-500/100 text-lg space-x-20 w-90 h-10 p-2 rounded-lg'></input>

      </div>

      <div className="flex-row flex absolute opacity-50 ">

        <a href="https://www.linkedin.com/in/shashank1997/">
          <img className="h-10  mr-2"
            src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" />

        </a>
        <a href="https://github.com/shashankusinggithub">
          <img className="h-10 mr-2"
            src="https://pngimg.com/uploads/github/github_PNG83.png"
          />
        </a>

>>>>>>> master
      </div>
      <br></br>

      <motion.img
<<<<<<< HEAD
        
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
=======
        layout
        id='child-id'
        className="w-20 m-14 relative "
        dragMomentum={false}
        drag
        onDragEnd={updatePosition}
        animate={animation}
        // transition={{ type: 'spring', stiffness:0}}
        transition={{
          delay: 0.5,

        }}
        onChangeCapture={updatePosition}
        onTap={handleStartSprite}
        src={urlSprite}>
      </motion.img>

    </div>

>>>>>>> master
  );
}
