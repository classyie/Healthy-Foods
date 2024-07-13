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
  function handleOnChange(event){
    console.log(event.target.value);  // Placeholder for handling input change event
  }

  return (
    <div className={styles.mainBox}>
      <h1>Healthy Foods</h1>
      <AddFood handleOnChange={handleOnChange}/>
      <Foods foodItems={foodItems}/>
    </div>
  )
}

export default App
