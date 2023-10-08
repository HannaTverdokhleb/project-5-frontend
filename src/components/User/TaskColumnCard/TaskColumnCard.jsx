import css from './TaskColumnCard.module.css';
import avatar from '../../../images/desktopImages/header/header_desk@1x.png';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = ({
  task: { title, priority },
  user: { avatarURL, name },
}) => {
  return (
    <div className={css.cardWrapper}>
      <p className={css.taskDescription}>{title}</p>
      <div className={css.cardFooter}>
        <div className={css.infoBox}>
          <img
            className={css.infoBoxAvatar}
            src={avatarURL || avatar}
            alt={name}
          />
          <span className={`${css.infoBoxTaskPriority} ${css[priority]}`}>
            {`${priority.charAt(0).toUpperCase()}${priority.slice(1)}`}
          </span>
        </div>
        <TaskToolbar />
      </div>
    </div>
  );
};

export default TaskColumnCard;
