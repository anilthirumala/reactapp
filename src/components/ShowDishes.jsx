import React from 'react'
import { DishContext } from '../context/DishContextProvider'
export default function ShowDishes() {
    const { dishes } = React.useContext(DishContext)
  return (
    <div>ShowDishes
      <div style={{display:'flex'}}>
        {dishes.map((dish)=>(
            <div key={dish.id} style={{width:'200px',border:'3px solid blue'}}>
                <h3>{dish.name}</h3>
                <p>Price: ${dish.price.toFixed(2)}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
