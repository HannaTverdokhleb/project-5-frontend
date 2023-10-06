import React from "react";
import styles from './Popup.module.css';

const EditButton = () => {
    return (
        <>
            <div className={styles.editIcon}></div>
            <button className={styles.addButton}>Edit
            </button>
        </>
    )
}

export default EditButton