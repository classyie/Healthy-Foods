// import styles from './Foods.module.css';
import FoodItem from './FoodItem';
function Foods({foodItems, operationItem, btnOperation}) {    
    return (
        <ul className="list-group">
            {foodItems.map((item) => (
                <FoodItem key={item} item={item} operationItem={operationItem} btnOperation = {btnOperation}/>
            ))}
            {/* <li className="list-group-item">Spinach</li>
            <li className="list-group-item">Blueberries</li>
            <li className="list-group-item">Almonds</li>
            <li className="list-group-item">Salmon</li>
            <li className="list-group-item">Quinoa</li> */}
        </ul>

    );
}

export default Foods;