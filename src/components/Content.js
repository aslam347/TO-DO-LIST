import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {


const[items, setItems] = useState([
 
   {
    id: 1,
    checked: true,
    item: "pratice code"
   },

  {
    id: 2,
    checked: true,
    item: "prayer"
   },

   {
     id: 3,
    checked: true,
    item: "play cricket"
     
   }]);


const handleCheck = (id) =>  {
  console.log(`id:${id}`)
}

  return (
     
   <main>
    <h1>hi</h1>

    <ul>
    {items.map((item) => (

<li  key={item.id}  >
 <input
 
 type = "checkbox"
 checked = {item.checked}
 onChange={() => handleCheck(item.id)}
 />

 <label>{item.item}</label>
 <FaTrashAlt />
 


 </li>
    ))}

    </ul>


   </main>




  )
}

export default Content
