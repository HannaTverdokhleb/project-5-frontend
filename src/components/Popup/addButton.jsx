import React from "react";
import styles from './Popup.module.css';

const AddButton = () => {
    return (
        <>
            <div className={styles.addIcon}></div>
            <button className={styles.addButton}>Add
            </button>
        </>
    )
}

export default AddButton