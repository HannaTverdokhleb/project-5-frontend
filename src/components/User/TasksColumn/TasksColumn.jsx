import ButtonAddTask from '../ButtonAddTask/ButtonAddTask';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';

import css from './TasksColumn.module.css';

const TasksColumn = props => {
  return (
    <div className={css.tasksColumnWrapper}>
      <ColumnHeadBar headBarName={props.headBarName} />
      <ColumnTasksList />
      <ButtonAddTask />
    </div>
  );
};

export default TasksColumn;
