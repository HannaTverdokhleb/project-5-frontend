import { deleteTask, editTask } from 'redux/Tasks/operations';
import TaskSwitcher from '../TaskSwitcher/TaskSwitcher';
import css from './TaskToolbar.module.css';

import { FiArrowRightCircle, FiEdit2, FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const TaskToolbar = ({ openPopup, task, handleTask, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleCategoryChange = newCategory => {
    const correctDate = task.date.split('T')[0];
    const dataEdit = {
      ...task,
      date: correctDate,
      category: newCategory,
    };
    dispatch(editTask(dataEdit));
  };

  const handleToggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className={css.optionsBox}>
        <button
          className={css.buttonIconOptions}
          type="button"
          aria-label="Movement button"
          onClick={handleToggleSwitcher}
        >
          <FiArrowRightCircle size="16px" />
        </button>
        <button
          className={css.buttonIconOptions}
          type="button"
          aria-label="Edit button"
          onClick={() => handleTask(task)}
        >
          <FiEdit2 size="16px" />
        </button>
        <button
          className={css.buttonIconOptions}
          type="button"
          aria-label="Delete button"
          onClick={() => handleDeleteTask(task._id)}
        >
          <FiTrash size="16px" />
        </button>
      </div>
      {isOpen && (
        <TaskSwitcher
          catId={task.category}
          onCategoryChange={handleCategoryChange}
          isLast={isLast}
        />
      )}
    </div>
  );
};

export default TaskToolbar;
