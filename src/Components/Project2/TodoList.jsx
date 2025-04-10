import React, { useState } from 'react'

const TodoList = () => {
  
  //One variable to store Todos
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState("")

  function submitHandler(e) {
    e.preventDefault();
      //create Object
      if (todo.length) {
        
      const newTodo = {
        id:Math.random()*10,
        task:todo,
      }
      setTodos([...todos,newTodo])
      setTodo('')

    }
  }

  function DeleteTodo(id) {
    //filter The Todo 
    const FilterTodo = todos.filter((t)=>t.id!=id)
    setTodos(FilterTodo)
  }

  return (
    <div className=' text-white bg-black w-[100%] h-[100vh] flex flex-col justify-center items-center gap-y-4'>
      <form> 
        <div className=' flex justify-center items-center gap-x-3'>
        <label className=' text-3xl font-extralight'>Enter Todo:</label>
        <input className=' text-3xl font-extralight border'  type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button className=' text-2xl px-3 py font-extralight border rounded-2xl hover:bg-white hover:text-black transition-all duration-200 shadow-2xl shadow-white'  onClick={submitHandler}>Add Todo</button>
        </div>
      </form>
      <div>
        {
          todos.map((value)=>(
            <div key={value.id} className=' flex gap-x-3 justify-center py-1  items-center'>
              <div className=' text-2xl font-semibold'>{value.task}</div>
              <button className=' text-2xl border rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-white' onClick={()=>DeleteTodo(value.id)}>X</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TodoList