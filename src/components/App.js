
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
  const [budget,setBudget] = useState(0)

  const handleBudget = (e) => {
    setBudget(Number(e.target.value))
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your budget to check available items:</h2>
        <input type="number" value={budget} min="0" max="100" onChange={handleBudget} />
        <h2>Items you can buy are in green color</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item,index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td style={{color: item.price > budget ? "rgb(0, 128, 0)" : 'rgb(255, 0, 0)'}} >{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default App
