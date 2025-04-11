import React, { useState } from 'react'

const Accordian = ({title,content}) => {

  const [isActive,setisActive] = useState(false)

  return (
    <section className=' bg-black text-white'>
      <div onClick={()=>setisActive(!isActive)}>
        <div>
        <div className=' text-3xl'>{title}</div>
        {
          isActive ? <div className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300'>-</div>:<div className=' border px-4 py-2 rounded-xl hover:bg-white hover:text-black shadow-2xl shadow-white transition-all duration-300'>+</div>
        }  
        </div>
        <div>
          {
            isActive && (<h1 className=' text-3xl'>{content}</h1>)
          }
        </div>
      </div>
    </section>
  )
}

export default Accordian
