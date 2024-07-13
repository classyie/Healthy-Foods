import styles from './FoodItem.module.css'
function FoodItem({item}){
    return (
        <li  className={`${styles.listItems} list-group-item`}>{item} 
                <button className={`${styles.button} btn btn-secondary`}>Add</button>
        </li>
    );
}
export default FoodItem;