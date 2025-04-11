import React, { useState } from 'react'

const Testimonial = () => {
  
  const [index,setIndex] = useState(0)

  const test = [
    {
      "quote": "This product completely changed the way I work—highly recommended!",
      "author": "Sarah Johnson"
    },
    {
      "quote": "Incredible customer service and a top-quality experience from start to finish.",
      "author": "James Peterson"
    },
    {
      "quote": "I was skeptical at first, but this turned out to be one of the best investments I’ve made.",
      "author": "Emily Chen"
    },
    {
      "quote": "Reliable, easy to use, and the support team is fantastic.",
      "author": "Carlos Mendoza"
    },
    {
      "quote": "Exceeded my expectations in every way. I tell everyone about it!",
      "author": "Priya Kapoor"
    }
  ]

  function PrevIndex() {
    setIndex((index+test.length-1)%test.length)
  }

  function NextIndex() {
    setIndex((index+1)%test.length)
  }

  function Reset() {
    setIndex(0)
  }
  
  return (
    <div className=' bg-black text-white w-[100%] h-[100vh] flex flex-col justify-center items-center gap-y-3'>
    <div className=' flex flex-col justify-center items-center gap-y-3'>
      <h1 className=' font-extralight text-3xl'>{test[index].quote}</h1>
      <h1 className=' font-bold text-2xl'>{test[index].author}</h1>
    </div>
    <div className=' flex gap-x-6'>
      <button className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300' onClick={PrevIndex}>Prev </button>
      <button className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300' onClick={Reset}>Reset </button>
      <button className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300' onClick={NextIndex}>Next </button>
    </div>
    </div>
  )
}

export default Testimonial
