import React from 'react'
 
export  const DishContext = React.createContext()

export default function DishContextProvider(props) {
  const [dishes, setDishes] = React.useState([
    { id: 1, name: 'Spaghetti Bolognese', price: 12.99 },
    { id: 2, name: 'Chicken Curry', price: 10.99 },
    { id: 3, name: 'Beef Stroganoff', price: 14.99 }
  ])
  return (
    <DishContext.Provider value={{ dishes, setDishes}}>
      {props.children}
    </DishContext.Provider>
  )
}
