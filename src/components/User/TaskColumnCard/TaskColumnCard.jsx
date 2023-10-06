import css from './TaskColumnCard.module.css';
import avatar from '../../../images/desktopImages/header/header_desk@1x.png';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = props => {
  //props => taskDescription, avatar, priority
  return (
    <div className={css.cardWrapper}>
      <p className={css.taskDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed
        laborum voluptate.
      </p>
      <div className={css.cardFooter}>
        <div className={css.infoBox}>
          <img
            className={css.infoBoxAvatar}
            src={avatar}
            alt="The avatar of the task performer"
          />
          <span className={css.infoBoxTaskPriority}>Medium</span>
        </div>
        <TaskToolbar />
      </div>
    </div>
  );
};

export default TaskColumnCard;
