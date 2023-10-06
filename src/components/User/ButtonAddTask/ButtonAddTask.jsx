import css from './ButtonAddTask.module.css';
import { FiPlus } from 'react-icons/fi';

const ButtonAddTask = () => {
  return (
    <button className={css.buttonAddTask} type="button">
      <FiPlus size="24" />
      Add Task
    </button>
  );
};

export default ButtonAddTask;
