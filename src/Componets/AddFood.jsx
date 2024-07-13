import styles from './AddFood.module.css'
function AddFood({handleKeyDown}) {
    return (
        <input type="text" onKeyDown={handleKeyDown}/>
    );
}

export default AddFood;