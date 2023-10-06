import React, { useState } from 'react';
import styles from './Popup.module.css';
import { Modal } from '../Modal/Modal';
import AddButton from './addButton';
import EditButton from './editButton';

const Popup = ({ isOpen , onClose, onSubmit, task }) => {
  const [formData, setFormData] = useState({
    title: '',
    start: '',
    end: '',
    priority: 'low',
  });

const [selectedPriority, setSelectedPriority] = useState('');
  
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleTimeChange = (name) => (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

const priorities = ['Low', 'Medium', 'High'];
    
const handlePriorityChange = (event, priority) => {
    setSelectedPriority(priority.toLowerCase());
  };

    return (
      <Modal>
    <div className={`${styles.popupContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={onClose}>

        </div>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
            <input
                className={styles.inputTitle}
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter text"
          />
        </div>
        <div className={styles.timeInputsContainer}>
          <div className={styles.timeGroup}>
            <label htmlFor="start" className={styles.label}>Start</label>
            <input
              type="time"
              name="start"
              id="start"
              value={formData.start}
              onChange={handleTimeChange('start')}
              className={styles.timeInput}
            />
          </div>
          <div className={styles.timeGroup}>
            <label htmlFor="end" className={styles.label}>End</label>
            <input
              type="time"
              name="end"
              id="end"
              value={formData.end}
              onChange={handleTimeChange('end')}
              className={styles.timeInput}
            />
          </div>
        </div>
        <div className={styles.radioContainer}>
          <div className={styles.radioGroup}>
            {priorities.map((priority) => (
                <label
                className={`${styles.radioLabel} ${selectedPriority === priority.toLowerCase() ? styles.checked : ''}`}
          onClick={(event) => handlePriorityChange(event, priority)}
                >
                <span className={`${styles.customIcon} ${styles[`customIcon${priority}`]}`}></span>
                <input
                  type="radio"
                  name="priority"
                  value={priority.toLowerCase()}
                  checked={formData.priority === priority.toLowerCase()}
                    onChange={handleChange}
                    className={styles.radioIcon}
                />
                    {priority}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.buttonGroup}>
                        {task ? (< EditButton onClick={handleSubmit} />)
                            : (< AddButton onClick={handleSubmit} />)}
            <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
        </div>
      </div>
            </div>
    </Modal>
  );
};

export default Popup;
