import React from 'react'
import Blockcopy from "./Blockcopy";
<<<<<<< HEAD
import { useDrag, useDrop } from "react-dnd";
import { useState, useEffect, useContext } from 'react';
import { Reorder, useDragControls } from "framer-motion"
=======
import { useDrop } from "react-dnd";
import { useState, useEffect, useContext } from 'react';
import { Reorder} from "framer-motion"
>>>>>>> master
import Context from "./Context";



function ControlBlock(props) {
  const [keyVal, setKeyVal] = useContext(Context);
<<<<<<< HEAD

  const [innerBlock, setInnerBlock] = useState([])
  let count = 1

  useEffect(() => {
    let inner = []

=======
  const [innerBlock, setInnerBlock] = useState([])

  let count = 1
// adding the component into the inner list of for loop and updating it into the board list
  useEffect(() => {
    let inner = []
>>>>>>> master
    for (let i = 0; i < innerBlock.length; i++) {
      inner.push({ onTap: innerBlock[i].onTap, action: innerBlock[i].action, key: innerBlock[i].key })
    }

<<<<<<< HEAD
    props.setBoard((prv) => {
=======
    props.setInlist((prv) => {
>>>>>>> master
      const index = prv.findIndex(object => {
        return object.key === props.id;
      });
      // console.log("innerbox, board", index, prv)
<<<<<<< HEAD

      prv[index].array = inner

=======
      prv[index].array = inner
>>>>>>> master
      return ([...prv])
    })
    // setInnerBlock(inner)
    // console.log(innerBlocks, innerBlock)
  }, [innerBlock])

<<<<<<< HEAD

=======
// drop function and updating the board
>>>>>>> master
  const [{ isOver }, dropE] = useDrop(() => ({
    accept: ["insert", "replace", "replaceinto"],
    drop: (item) => addImageToBoard(item.props),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addImageToBoard = (ite) => {
    // console.log(ite)
    const temp = {
<<<<<<< HEAD
      id: ite.id,
=======
      func: ite.func,
>>>>>>> master
      class: ite.class,
      operation: ite.operation,
      action: ite.item.action,
      onTap: ite.onTap,
      type: ite.type,
      array: ite.item.array

    }
    count += 1
<<<<<<< HEAD


=======
>>>>>>> master
    setInnerBlock((prv) => {
      // console.log(temp)
      return ([...prv, { ...temp, key: (props.id) * 1000 + count }])
    })

<<<<<<< HEAD

    // const index = props.flow.findIndex(object => {
    //   return object.id === props.id;
    // });

    // props.setFlow((prv) => {
    //   // console,log(prv)
    //   // console.log(props.id, "propsid", props.flow)
    //   // prv[index].array  =  innerBlock
    //   return (prv)
    // })


  }

=======
  }
// handeling delete, element gets deleted when del is pressed
>>>>>>> master
  useEffect(() => {
    const listener = event => {
      if (event.code === "Delete") {
        if (keyVal > 1000) {
<<<<<<< HEAD

=======
>>>>>>> master
          setInnerBlock((prv) => {
            let newArr = prv.filter(object => {
              return object.key !== keyVal
            })
            return ([...newArr])
          })
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
<<<<<<< HEAD

    };
  }, [keyVal]);

  function handleChange(event) {
    const value = Number(event.target.value.replace(/\D/g, ''))
    console.log(value)
=======
    };
  }, [keyVal]);

// updating the values in board
  function handleChange(event) {
    const value = Number(event.target.value.replace(/\D/g, ''))
    // console.log(value)
>>>>>>> master
    
      props.setBoard((prv) => {
        const index = prv.findIndex(object => {
          return object.key === props.id;})
<<<<<<< HEAD


          prv[index].repeat = value
          console.log(prv[index], props.id, index)

          // console.log(prv[index].action)
          return ([...prv])


        });
      
    }

    return (
      <div ref={dropE} className={`${props.class} items-end rounded-lg border-2`}
        
=======
          prv[index].repeat = value
          // console.log(prv[index], props.id, index)
          // console.log(prv[index].action)
          return ([...prv])
        });      
    }

    return (
      <div ref={dropE} className={`${props.class}  min-h-20 rounded-lg border-2 shadow-lg flex flex-col`}        
>>>>>>> master
        onClick={() => {
          {
            setKeyVal(props.id)
          }
          // console.log(keyVal)
        }
        }
<<<<<<< HEAD
      >{props.operation} {props.id}
        <input onChange={handleChange} defaultValue={5} type="text"  className='text-blue-900 justify-items-end text-lg w-16 h-5 mx-6 p-4 rounded-lg'></input>
        <Reorder.Group axis="y" values={innerBlock} onReorder={setInnerBlock} >
          {innerBlock.map((item) => (
            <Reorder.Item key={item.key} value={item} drag className="mx-4  flex-row  content-center">
              <Blockcopy id={item.key} class={`text-m items-center  ${item.class}`} operation={item.operation} setFlow={props.setFlow}
                type={"replaceinto"} action={item.action}  setInnerBlock={setInnerBlock} />
=======
      >
        <div className='flex flex-row items-center '>
        <div className=' text-lg '>{props.operation}</div>
        <input onChange={handleChange} placeholder="5" type="text"  className='text-blue-900   ml-20  w-12 h-5  border-rounded rounded-xl'></input></div>
        
        <Reorder.Group axis="y" values={innerBlock} onReorder={setInnerBlock} > 
          {innerBlock.map((item) => (
            <Reorder.Item key={item.key} value={item} drag className=" flex-row  content-center">
              <Blockcopy id={item.key} class={` items-end ml-10 ${item.class}`} operation={item.operation} setFlow={props.setFlow}
                type={"replaceinto"} action={item.action}  setInlist={setInnerBlock} />
>>>>>>> master
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    )
  }

<<<<<<< HEAD


=======
>>>>>>> master
  export default ControlBlock