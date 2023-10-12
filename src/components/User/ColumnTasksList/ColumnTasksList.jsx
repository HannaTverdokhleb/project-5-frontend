import { selectUser } from 'redux/Auth/selectors';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import css from './ColumnTasksList.module.css';
import { useSelector } from 'react-redux';

const ColumnTasksList = ({ tasks, openPopup, handleTask }) => {
  const user = useSelector(selectUser);
  return (
    <ul className={css.columnTasksList}>
      {tasks.map((task, index) => (
        <li key={task._id}>
          <TaskColumnCard
            task={task}
            user={user}
            openPopup={openPopup}
            handleTask={handleTask}
            isLast={index === tasks.length - 1} // Передаем isLast как пропс
          />
        </li>
      ))}
    </ul>
  );
};

export default ColumnTasksList;
