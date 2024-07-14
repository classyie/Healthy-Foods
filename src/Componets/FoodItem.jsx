import styles from './FoodItem.module.css'
function FoodItem({item,operationItem, btnOperation}){
    return (
        <li  className={`${styles.listItems} list-group-item`}>{item} 
                <button className={`${styles.button} btn btn-secondary`} onClick={() => operationItem(item)}>{btnOperation}</button>
        </li>
    );
}
export default FoodItem;