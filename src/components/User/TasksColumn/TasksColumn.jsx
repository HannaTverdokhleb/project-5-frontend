import { useState } from 'react';
import ButtonAddTask from '../ButtonAddTask/ButtonAddTask';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';

import css from './TasksColumn.module.css';
// import Popup from 'components/Popup/Popup';

const TasksColumn = ({ tasks, headBarName, catId }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


 const openPopup = task => {

    setIsPopupOpen(true);
  };

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };

  const handleTask = task => {
    setSelectedTask(task); // Зберігайте обрану задачу в стані
    openPopup();
  };

  return (
    <div className={css.tasksColumnWrapper}>
      <ColumnHeadBar
        headBarName={headBarName}
        catId={catId}
        openPopup={openPopup}
      />
      <ColumnTasksList
        tasks={tasks}
        openPopup={openPopup}
        handleTask={handleTask}
      />
      <ButtonAddTask catId={catId} openPopup={openPopup} />
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={closePopup} task={selectedTask} />
      )}
    </div>
  );
};

export default TasksColumn;
