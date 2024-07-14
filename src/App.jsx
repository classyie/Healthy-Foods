import 'bootstrap/dist/css/bootstrap.css';
import  styles from './App.module.css'
import Container from './Componets/Container'
import Foods from './Componets/Foods'
import { useState } from 'react';
import AddFood from './Componets/AddFood';

function App() {
  let [foodItems, setFoodItem] = useState(["Spinach"
    ,"Blueberries"
    ,"Almonds",
    "Salmon",
    "Quinoa"]);
  let [cartItem, setCartItem] = useState([]);
  function handleKeyDown(event){
    // console.log(event.target.value);  // Placeholder for handling any Key Click
    // console.log(event.key)
    if(event.key==='Enter'){
      // console.log(event.target.value)
      setFoodItem([...foodItems, event.target.value])
      event.target.value = ''
    }
  }
  function addItem(item){
    setCartItem([...cartItem, item])
  }
  function deleteItem(item){
    setCartItem(cartItem.filter(i=>i!==item))
  }

  return (
    <>
    <Container>
      <h1>Healthy Foods</h1>
      <AddFood handleKeyDown={handleKeyDown}/>
      <Foods foodItems={foodItems} operationItem={addItem} btnOperation="Add"/>
    </Container>
    <Container >
      <h1>Shopping Cart</h1>
      <Foods foodItems={cartItem} operationItem={deleteItem} btnOperation="Delete"/>
      <button className="btn btn-primary">Checkout</button>
      <button className="btn btn-danger">Clear Cart</button>
      <p>Total: {cartItem.length} items</p>
    </Container>
    </>
  )
}

export default App
