import styles from './AddFood.module.css'
function AddFood({handleOnChange}) {
    return (
        <input type="text" onChange={handleOnChange}/>
    );
}

export default AddFood;