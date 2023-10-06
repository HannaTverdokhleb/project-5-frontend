import css from './TaskToolbar.module.css';

import { FiArrowRightCircle, FiEdit2, FiTrash } from 'react-icons/fi';

const TaskToolbar = () => {
  return (
    <div>
      <div className={css.optionsBox}>
        <button className={css.buttonIconOptions} type="button">
          <FiArrowRightCircle size="16px" />
        </button>
        <button className={css.buttonIconOptions} type="button">
          <FiEdit2 size="16px" />
        </button>
        <button className={css.buttonIconOptions} type="button">
          <FiTrash size="16px" />
        </button>
      </div>
      <ul className={css.dropdownTransferMenu}>
        <li>
          <button className={css.buttonDropdownTransferMenu} type="button">
            <span>In progress</span>
            <FiArrowRightCircle size="16px" />
          </button>
        </li>
        <li>
          <button className={css.buttonDropdownTransferMenu} type="button">
            <span>Done</span>
            <FiArrowRightCircle size="16px" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TaskToolbar;
