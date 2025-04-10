import React, { useState } from 'react'
import './style.css'

const DarkTheme = () => {

  const [backGroundColor,setbackGroundColor] = useState('white')
  const [textColor,settextColor] = useState('black')
  const [buttonStyle,setbuttonStyle] = useState('black')

  function changeHandler() {
    setbackGroundColor((color)=> color=='white'?'black':'white')
    settextColor((c)=> c=='black'?'white':'black')
    setbuttonStyle((color)=> color=='black'?'white':'black')
  }

  return (
    <div className=' flex justify-center items-center gap-y-4 flex-col w-[100%] h-[100vh]' style={{backgroundColor:backGroundColor,color:textColor}}>
      <div className=' text-9xl '>Welcome To Edunax</div>
      <div className=' text-4xl '>The AI Automation LMS Platform</div>
      <button className='px-8 py-3 shadow-white shadow-2xl transition-all duration-700  rounded-2xl font-bold text-xl' style={{backgroundColor:buttonStyle, color:backGroundColor}} onClick={changeHandler}>{
        backGroundColor == 'white' ? "Dark Theme" : "Light Theme"
        }</button>
    </div>
  )
}

export default DarkTheme
