import css from './TasksColumnsList.module.css';

import TasksColumn from '../TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/Tasks/selectors';

import moment from 'moment';

const TasksColumnsList = ({ day }) => {
  const categories = ['to-do', 'in-progress', 'done'];
  const columnTitles = ['To do', 'In progress', 'Done'];

  const tasks = useSelector(selectTasks);

  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  const filterTasksByDate = (tasks, targetDate) => {
    return tasks.filter(task => {
      const taskDate = moment(task.date).format('YYYY-MM-DD');
      return taskDate === targetDate;
    });
  };

  const filteredAndSortedTasks = filterTasksByDate(sortedTasks, day);

  const tasksByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredAndSortedTasks.filter(
      task => task.category === category
    );
    return acc;
  }, {});

  return (
    <ul className={css.tasksColumnsList}>
      {categories.map((category, index) => (
        <li key={category}>
          <TasksColumn
            headBarName={columnTitles[index]}
            tasks={tasksByCategory[category]}
            catId={category}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksColumnsList;
