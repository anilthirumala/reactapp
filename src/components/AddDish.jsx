import React from 'react'
import { DishContext } from '../context/DishContextProvider'
export default function AddDish() {
    const { dishes, setDishes } = React.useContext(DishContext)
    const handleAddDish =()=>{
        let pname = document.getElementById("pname").value;
        let pprice = document.getElementById("pprice").value;
        if(pname.length ===0){
         document.getElementById("pname-error").innerText ="Name is required"
         return;
        }
        if(pprice.length ===0){
         document.getElementById("price-error").innerText ="Price is required"
         return;
        }
        const nextId = dishes.length + 1;
        const newDish = {
        id: nextId,
        name: pname,
        price: parseFloat(pprice)
        };

  setDishes(prev => [...prev, newDish]);

}
  return (
    <div>
      <h2>Add a New Dish</h2>
      
        <label for="pname">Name:</label>
        <input type="text"  id="pname" />  <br/>
        <span id="pname-error" style={{color: 'red'}}></span>  <br />
          <label for="pprice">Price:</label>
       <input type="number"  id="pprice" /> <br />
       <span id="price-error"></span>   <br />
        <button type="submit"  onClick={handleAddDish}>Add Dish</button>
    </div>
  )
}
