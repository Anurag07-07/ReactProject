import React from 'react'
import Accordian from './Accordian';

const File = () => {

  const accordionItems = [
    {
      id: 1,
      title: "What is ChatGPT?",
      content: "ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text.",
      isOpen: false
    },
    {
      id: 2,
      title: "How does it work?",
      content: "It uses deep learning techniques, specifically the Transformer architecture, to analyze and generate text.",
      isOpen: false
    },
    {
      id: 3,
      title: "Can I use it for free?",
      content: "Yes, there is a free version available, but some features might be limited or slower compared to the pro version.",
      isOpen: false
    }
  ];
  

  return (
    <div className='w-[100%] h-[100vh] bg-black text-white gap-y-5 flex justify-center items-center text-center  flex-col'>
      {
        accordionItems.map(({title,content})=>{
          return <Accordian key={Math.random()} title={title} content={content}></Accordian>
        })
      }      
    </div>
  )
}

export default File
