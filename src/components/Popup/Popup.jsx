import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Popup.module.css';
import { createTask, editTask, getTasks } from '../../redux/Tasks/operations';
import AddButton from './addButton';
import EditButton from './editButton';
import { Modal } from 'components/Modal/Modal';
import { useParams } from 'react-router-dom';

const Popup = ({ isOpen, onClose, task, category }) => {
  const dispatch = useDispatch();
  const {day} = useParams();

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
      dispatch(editTask({ _id: task._id, ...formData, date: day, category }));
    } else {
      dispatch(createTask({...formData, date: day, category}));
      setIsTaskCreated(true);
      setFormData(initialFormData);
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
          <svg className={styles.closeButton} onClick={onClose} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15"  height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor"></path></svg>
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
