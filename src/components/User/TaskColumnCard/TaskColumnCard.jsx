import css from './TaskColumnCard.module.css';
// import avatar from '../../../images/desktopImages/header/header_desk@1x.png';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = ({
  task,
  user: { avatarURL, name },
  openPopup,
  handleTask,
  isLast,
}) => {
  return (
    <div className={css.cardWrapper}>
      <p className={css.taskDescription}>{task.title}</p>
      <div className={css.cardFooter}>
        <div className={css.infoBox}>
          {avatarURL ? (
            <img className={css.infoBoxAvatar} src={avatarURL} alt={name} />
          ) : (
            <p className={css.infoBoxTextAvatar}>
              {name ? name.slice(0, 1) : 'A'}
            </p>
          )}
          <span className={`${css.infoBoxTaskPriority} ${css[task.priority]}`}>
            {`${task.priority.charAt(0).toUpperCase()}${task.priority.slice(
              1
            )}`}
          </span>
        </div>
        <TaskToolbar
          openPopup={openPopup}
          task={task}
          handleTask={handleTask}
          isLast={isLast}
        />
      </div>
    </div>
  );
};

export default TaskColumnCard;
