import css from './ButtonAddTask.module.css';
import { FiPlus } from 'react-icons/fi';

const ButtonAddTask = ({ catId, openPopup }) => {
  return (
    <button className={css.buttonAddTask} type="button" onClick={openPopup}>
      <FiPlus size="24" />
      Add Task
    </button>
  );
};

export default ButtonAddTask;
