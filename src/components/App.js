
import React, { useState } from "react";
import './../styles/App.css';

const items = [
  {
    name: "Apple",
    price: 20
  },
  {
    name: "Banana",
    price: 10
  },
  {
    name: "Nutella",
    price: 30
  },
  {
    name: "Razor",
    price: 5
  },
  {
    name: "CornFlakes",
    price: 15
  },
  {
    name: "Sound Bar",
    price: 50
  },
  {
    name: "Iphone",
    price: 80
  }
]
const App = () => {
  const [budget,setBudget] = useState()

  const handleBudget = (e) => {
    setBudget(Number(e.target.value))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your budget to check available items:</h2>
        <input type="number" value={budget} min="0" max="100" onChange={handleBudget} />
        <h2>Items you can buy are in green colors</h2>
        <div>
           {items.map((item,index) => (
            <div key={index} style={{display: "flex", alignItems:"center", gap: "30px"}}>
              <p>{item.name}</p>
              <p style={{color: item.price <= budget ? "green" : "red" }}>{item.price}</p>
            </div>
           ))}          
        </div>
    </div>
  )
}

export default App
