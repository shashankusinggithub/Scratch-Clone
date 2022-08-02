import React from 'react'
import { useEffect, useContext } from 'react';
import { useDrag } from "react-dnd";
import { motion, useMotionValue, useVelocity } from "framer-motion"
import Context from "./Context";




function Blockcopy(props) {
  const [keyVal, setKeyVal] = useContext(Context);

<<<<<<< HEAD
  function handleChange(event) {
    const value = Number(event.target.value.replace(/\D/g, ''));



    if (props.id < 1000) {
      props.setBoard((prv) => {
        const index = prv.findIndex(object => {
          return object.key === props.id;
        });

        // console.log(prv[index])


        {
          if (prv[index].id == "move fw") {
            prv[index].action.x = value
          }
          else if (prv[index].id == "move bw") {
            prv[index].action.x = -1 * value
          }
          else if (prv[index].id == "move up") {
            prv[index].action.y = -1 * value
          }
          else if (prv[index].id == "move dwn") {
            prv[index].action.y = value
          }
          else if (prv[index].id == "rotateAntiClock") {
            prv[index].action.rotate = -1 * value
          }
          else if (prv[index].id == "rotateClockWise") {
            prv[index].action.rotate = value
          }

          // console.log(prv[index].action)
          return ([...prv])
=======
// handles the changes and updates into the board
  function handleChange(event) {
    const value = Number(event.target.value.replace(/\D/g, ''));     
      props.setInlist((prv) => {
        let newArr = [...prv]
        const index = newArr.findIndex(object => {
          // console.log("index props", props.id)
          return object.key === props.id;
        });
        // console.log("index", index)
        {
          if (newArr[index].func == "move fw") {

            let temp = { x: value, y: 0, rotate: 0 }
            newArr[index].action= temp
          }
          else if (newArr[index].func == "move bw") {

            let temp = { x: -1 * value, y: 0, rotate: 0 }
            newArr[index].action= temp
          }
          else if (newArr[index].func == "move up") {
            let temp = { x: value, y: -1 * value, rotate: 0 }
            newArr[index].action= temp
          }
          else if (newArr[index].func == "move dwn") {
            let temp = { x: 0, y: value, rotate: 0 }
            newArr[index].action= temp
          }
          else if (newArr[index].func == "rotateAntiClock") {
            let temp = { x: 0, y: 0, rotate: -1 * value }
            newArr[index].action = temp
          }
          else if (newArr[index].func == "rotateClockWise") {
            let temp = { x: 0, y: 0, rotate: value }
            newArr[index].action = temp
          }

          // console.log(newArr[index - 1], newArr[index], newArr[index + 1], "board")
          return (newArr)
>>>>>>> master
        }
      })
    }

<<<<<<< HEAD
    else {
      props.setInnerBlock((prv) => {
        const index = prv.findIndex(object => {
          return object.key === props.id;
        });

        // console.log(prv[index])


        {
          if (prv[index].id == "move fw") {
            prv[index].action.x = value
          }
          else if (prv[index].id == "move bw") {
            prv[index].action.x = -1 * value
          }
          else if (prv[index].id == "move up") {
            prv[index].action.y = -1 * value
          }
          else if (prv[index].id == "move dwn") {
            prv[index].action.y = value
          }
          else if (prv[index].id == "rotateAntiClock") {
            prv[index].action.rotate = -1 * value
          }
          else if (prv[index].id == "rotateClockWise") {
            prv[index].action.rotate = value
          }

          // console.log(prv[index].action)
          return ([...prv])
        }
      })
    }
  }

// console.log(props.action, "action")

=======
>>>>>>> master
  return (

    <motion.div id="block"

      //  onFocus={()=> console.log("captured", props.id)}
<<<<<<< HEAD
      className={`${props.class} h-16 rounded-lg border-2`}
      onClick={(event) => {
        setKeyVal(props.id)
        console.log(keyVal)
        event.stopPropagation()
      }}


      type={"replace"}>{props.operation}
      {props.action && <input onChange={handleChange} className="text-blue-900 text-lg w-16 h-4 mx-6 p-4 rounded-lg" type="text" defaultValue={100}  ></input>}
    </motion.div>


  )
}



=======
      className={`${props.class} h-11 items-center rounded-lg border-2`}
      onClick={(event) => {
        setKeyVal(props.id)
        // console.log(keyVal)
        event.stopPropagation()
      }}

      type={"replace"}>
      <div className='mr-4 items-center'>{props.operation}</div>
      <span> 
        {props.action && <input onChange={handleChange} className="shadow-lg text-blue-900  w-16 h-5     rounded-xl" type="text" placeholder="200"  ></input>}
        </span>
    </motion.div>
  )
}

>>>>>>> master
export default Blockcopy
