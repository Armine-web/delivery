import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import './foodDisply.css'
import FoodItem from '../foodItem/foodItem'

const FoodDisply = ({category}) => {
    const {RecipeList} = useContext(StoreContext)
  return (
    <div className='food-disply' id='food-disply'>
        <h2>Top dishes near you</h2>
        <div className="food-disply-list">
            {RecipeList.map((item, index)=> {
                if (category === 'All' || category.some(cat => item.mealType.includes(cat))){
                    return <FoodItem key={index} id={item.id} rating={item.rating} name={item.name} servings={item.servings} image={item.image} category={item.mealType}/>
                }
                return null;
            })}
        </div>
    </div>
  )
}

export default FoodDisply
