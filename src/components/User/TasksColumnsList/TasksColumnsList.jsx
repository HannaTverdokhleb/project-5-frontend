import css from './TasksColumnsList.module.css';

import TasksColumn from '../TasksColumn/TasksColumn';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/Tasks/selectors';
import { useEffect } from 'react';
import { getTasks } from 'redux/Tasks/operations';

const TasksColumnsList = () => {
  const categories = ['to-do', 'in-progress', 'done'];
  const columnTitles = ['To do', 'In progress', 'Done'];

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasksByCategory = categories.reduce((acc, category) => {
    acc[category] = tasks.filter(task => task.category === category);
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

  // const todoTasks = tasks.filter(task => task.category === 'to-do');
  // const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
  // const doneTasks = tasks.filter(task => task.category === 'done');

  // return (
  //   <ul className={css.tasksColumnsList}>
  //     <li key="to-do">
  //       <TasksColumn headBarName="To do" tasks={todoTasks} />
  //     </li>
  //     <li key="in-progress">
  //       <TasksColumn headBarName="In progress" tasks={inProgressTasks} />
  //     </li>
  //     <li key="done">
  //       <TasksColumn headBarName="Done" tasks={doneTasks} />
  //     </li>
  //   </ul>
  // );
};

export default TasksColumnsList;
