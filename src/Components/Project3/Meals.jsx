import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Meals = () => {

  const [meals,setMeals] = useState([])

  useEffect(()=>{
    async function fetchMeals() {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      console.log(response.data.meals); 
      setMeals(response.data.meals)
    }

    fetchMeals()
  },[])

  return (
    <div className=' grid grid-cols-4' >
      {
        meals.map(({strMeal,strMealThumb,idMeal})=>(
          <div className=' flex flex-col p-4'>
          <div key={idMeal}>
            <img src={strMealThumb} className=' w-full'></img>
          </div>
          <div className=' flex justify-between'>
            <div>{strMeal}</div>
            <div>#{idMeal}</div>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default Meals