import css from './TaskColumnCard.module.css';
import avatar from '../../../images/desktopImages/header/header_desk@1x.png';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ task, user: { avatarURL, name }, onOpenPopup }) => {
  return (
    <div className={css.cardWrapper}>
      <p className={css.taskDescription}>{task.title}</p>
      <div className={css.cardFooter}>
        <div className={css.infoBox}>
          <img
            className={css.infoBoxAvatar}
            src={avatarURL || avatar}
            alt={name}
          />
          <span className={`${css.infoBoxTaskPriority} ${css[task.priority]}`}>
            {`${task.priority.charAt(0).toUpperCase()}${task.priority.slice(
              1
            )}`}
          </span>
        </div>
        <TaskToolbar onOpenPopup={onOpenPopup} task={task} />
      </div>
    </div>
  );
};

export default TaskColumnCard;
