import { selectUser } from 'redux/Auth/selectors';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import css from './ColumnTasksList.module.css';
import { useSelector } from 'react-redux';

const ColumnTasksList = ({ tasks, onOpenPopup }) => {
  const user = useSelector(selectUser);
  return (
    <ul className={css.columnTasksList}>
      {tasks.map(task => (
        <li key={task._id}>
          <TaskColumnCard task={task} user={user} onOpenPopup={onOpenPopup} />
        </li>
      ))}
    </ul>
  );
};

export default ColumnTasksList;
