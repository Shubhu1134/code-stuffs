import React from 'react'
import { useState } from 'react'
import './bottom.css'


function Bottom()  {
  const [count ,setCount] = useState(5)

  function decrementCount(){
    setCount (prevCount =>prevCount -1)

  }  function incrementCount(){
    setCount (nextCount =>nextCount +1)

  }

  return (
   <>
   <div  className='bottom'>
   <button  className='button1'   onClick={decrementCount}> -</button>
   <span className='span'> {count} </span >
   <button  className='button2'   onClick={incrementCount}> +</button>
   </div>
   </>
  )
}

export default Bottom;
