import css from './ColumnHeadBar.module.css';

import { FiPlusCircle } from 'react-icons/fi';

const ColumnHeadBar = ({ headBarName, catId, openPopup }) => {
  return (
    <div className={css.columnHeadBar}>
      <h3>{headBarName}</h3>
      <button
        className={css.buttonIconAddTask}
        type="button"
        onClick={openPopup}
      >
        <FiPlusCircle />
      </button>
    </div>
  );
};

export default ColumnHeadBar;
