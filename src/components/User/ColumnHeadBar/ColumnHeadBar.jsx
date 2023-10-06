import css from './ColumnHeadBar.module.css';

import { FiPlusCircle } from 'react-icons/fi';

const ColumnHeadBar = props => {
  return (
    <div className={css.columnHeadBar}>
      <span>{props.headBarName}</span>
      <button className={css.buttonIconAddTask} type="button">
        <FiPlusCircle />
      </button>
    </div>
  );
};

export default ColumnHeadBar;
