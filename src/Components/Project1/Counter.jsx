import React, { useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0)
 
  function IncrementHandler(params) {
    setCount(count+1)
  }

  function ResetHandler() {
    setCount(0)
  }

  function DecrementHandler(params) {
    setCount(count-1)
  }


  return (
    <div className=' bg-black text-white w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-y-4'>
      <div className=' text-7xl font-bold'>
      <h1>{count}</h1>
      </div>
      <div className=' flex gap-x-9 '>
        <div className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300' onClick={IncrementHandler}>Increment</div>
        <div className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300'  onClick={ResetHandler}>Reset</div>
        <div className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300'  onClick={DecrementHandler}>Decrement</div>
      </div>
    </div>
  )
}

export default Counter