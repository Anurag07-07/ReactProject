import React, { useState } from 'react'

const Calculator = () => {

  const [inputValue,setInputValue] = useState("")

  function clear() {
    setInputValue("")
  }

  function display(value) {
    setInputValue(inputValue+value)
  }

  function calculate() {
    setInputValue(eval(inputValue))
  }

  return (
    <div className=' bg-black text-white w-[100%] h-[100vh] flex flex-col justify-center items-center'>
    <div className=' border-e-8 border-t-4 border'>
    <div className=' flex flex-col justify-center items-center'>
      <div>
      <div className=' text-4xl font-bold py-4'>Calculator</div>
      </div>
      <div className=' flex gap-x-3 px-3 py-1 justify-center items-center'>
      <input className='border  h-[2rem]' type='text' value={inputValue}></input>
      <div className='  px-2 py-1 shadow-2xl shadow-white  rounded-2xl font-extrabold hover:bg-red-700 hover:text-black transition-all duration-500' onClick={()=>clear()}>Clear</div>   
      </div>
    </div>
    <div className=' grid grid-cols-4  p-4'>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("0")}>0</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("1")}>1</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("2")}>2</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("3")}>3</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("4")}>4</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("5")}>5</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("6")}>6</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("7")}>7</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("8")}>8</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("9")}>9</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("+")}>+</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("-")}>-</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("*")}>*</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("/")}>/</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("%")}>%</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>display("**")}>**</span>
      <span className=' border flex justify-center items-center p-4 rounded-b-4xl bg-gradient-to-tr from-black  to-white text-black font-bold text-xl'  onClick={()=>calculate()}> = </span>
    </div>
    </div>
    </div>
  )
}

export default Calculator
