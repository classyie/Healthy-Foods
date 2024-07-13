import 'bootstrap/dist/css/bootstrap.css';
import  styles from './App.module.css'
import Foods from './Componets/Foods'
import { useState } from 'react';
import AddFood from './Componets/AddFood';

function App() {
  let [foodItems, setFoodItem] = useState(["Spinach"
    ,"Blueberries"
    ,"Almonds",
    "Salmon",
    "Quinoa"]);
  function handleKeyDown(event){
    // console.log(event.target.value);  // Placeholder for handling any Key Click
    // console.log(event.key)
    if(event.key==='Enter'){
      // console.log(event.target.value)
      setFoodItem([...foodItems, event.target.value])
      event.target.value = ''
    }
  }

  return (
    <div className={styles.mainBox}>
      <h1>Healthy Foods</h1>
      <AddFood handleKeyDown={handleKeyDown}/>
      <Foods foodItems={foodItems}/>
    </div>
  )
}

export default App
