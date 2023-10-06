import css from './TasksColumnsList.module.css';

import TasksColumn from '../TasksColumn/TasksColumn';

const TasksColumnsList = () => {
  return (
    <ul className={css.tasksColumnsList}>
      <li>
        <TasksColumn headBarName="To do" />
      </li>
      <li>
        <TasksColumn headBarName="In progress" />
      </li>
      <li>
        <TasksColumn headBarName="Done" />
      </li>
    </ul>
  );
};

export default TasksColumnsList;
