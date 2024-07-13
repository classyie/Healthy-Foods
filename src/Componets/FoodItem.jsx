import styles from './FoodItem.module.css'
function FoodItem({item,addItem, btnOperation}){
    return (
        <li  className={`${styles.listItems} list-group-item`}>{item} 
                <button className={`${styles.button} btn btn-secondary`} onClick={(item) => addItem({item})}>{btnOperation}</button>
        </li>
    );
}
export default FoodItem;