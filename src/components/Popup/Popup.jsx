import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Popup.module.css';
import { createTask, editTask, getTasks } from '../../redux/Tasks/operations';
import AddButton from './addButton';
import EditButton from './editButton';
import { Modal } from 'components/Modal/Modal';

const Popup = ({ isOpen, onClose, task }) => {
  const dispatch = useDispatch();

  const initialFormData = {
    title: '',
    start: '',
    end: '',
    priority: 'low',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedPriority, setSelectedPriority] = useState('low');
  const [isTaskCreated, setIsTaskCreated] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(editTask({ _id: task._id, ...formData }));
    } else {
      dispatch(createTask(formData));
      setIsTaskCreated(true);
      setFormData(initialFormData); // Очищаємо форму після створення таски
    }
    onClose();
    dispatch(getTasks());
  };

  const priorities = ['Low', 'Medium', 'High'];

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority.toLowerCase());
    setFormData((prevData) => ({
      ...prevData,
      priority: priority.toLowerCase(),
    }));
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if (task) {
      setFormData(task);
      setSelectedPriority(task.priority.toLowerCase());
    } else {
      // setFormData(initialFormData);
      setSelectedPriority('low');
    }
  }, [task]);

  return (
    <Modal>
      <div className={`${styles.popupContainer} ${isOpen ? styles.open : ''}`}>
        <form className={styles.popup} onSubmit={handleSubmit}>
          <div className={styles.closeButton} onClick={onClose}></div>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
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
              <label htmlFor="start" className={styles.label}>
                Start
              </label>
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
              <label htmlFor="end" className={styles.label}>
                End
              </label>
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
                  className={`${styles.radioLabel} ${
                    selectedPriority === priority.toLowerCase()
                      ? styles.checked
                      : ''
                  }`}
                  onClick={() => handlePriorityChange(priority)}
                  key={priority}
                >
                  <span
                    className={`${styles.customIcon} ${styles[`customIcon${priority}`]}`}
                  ></span>
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
            {task ? <EditButton /> : <AddButton />}
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
          {isTaskCreated && (
            <div className={styles.successMessage}>Task created successfully!</div>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default Popup;
