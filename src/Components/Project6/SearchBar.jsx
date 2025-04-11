import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [Input,setInput] = useState(false)
  const [bgColor,setbgColor] = useState('white')
  
  function Setdata() {
    setInput(Input == false ? true : false )
    setbgColor(bgColor == 'white' ? 'black' : 'white')
  }
  return (
    <div className=' w-[100%] h-[100vh] flex justify-center items-center transition-all duration-500' style={{backgroundColor:bgColor}}>
      {
        Input ? (<input className=' text-white border-2 p-2'  type='text' placeholder='Enter The Name'></input>) : (<FaSearch size={40}  onClick={()=>Setdata()}></FaSearch>)
      }
    </div>
  )
}

export default SearchBar
