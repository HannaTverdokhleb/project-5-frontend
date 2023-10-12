import { selectUser } from 'redux/Auth/selectors';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import css from './ColumnTasksList.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ColumnTasksList = ({ tasks, openPopup, handleTask }) => {
  const user = useSelector(selectUser);

  const [sortedTasks, setSortedTasks] = useState([]);

  useEffect(() => {
    const sortedTasks = tasks.sort((a, b) => {
      const timestampA = new Date(a.updatedAt).getTime();
      const timestampB = new Date(b.updatedAt).getTime();
      return timestampB - timestampA;
    });

    setSortedTasks(sortedTasks);
  }, [tasks]);

  return (
    <ul className={css.columnTasksList}>
      {sortedTasks.map((task, index) => (
        <li key={task._id}>
          <TaskColumnCard
            task={task}
            user={user}
            openPopup={openPopup}
            handleTask={handleTask}
            isLast={index === tasks.length - 1}
          />
        </li>
      ))}
    </ul>
  );
};

export default ColumnTasksList;
