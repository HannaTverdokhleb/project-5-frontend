import { useState } from 'react';
import ButtonAddTask from '../ButtonAddTask/ButtonAddTask';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';

import css from './TasksColumn.module.css';
import Popup from 'components/Popup/Popup';

const TasksColumn = ({ tasks, headBarName, catId }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={css.tasksColumnWrapper}>
      <ColumnHeadBar
        headBarName={headBarName}
        catId={catId}
        onOpenPopup={openPopup}
      />
      <ColumnTasksList tasks={tasks} />
      <ButtonAddTask />
      {/* <Popup isOpen={isPopupOpen} onClose={closePopup()} /> */}
    </div>
  );
};

export default TasksColumn;
