import { AiOutlineLogin } from 'react-icons/ai';
import css from './TaskSwitcher.module.css';

export default function TaskSwitcher({ catId, onCategoryChange, isLast }) {
  const arrayCatId = ['to-do', 'in-progress', 'done'];
  const arrayCatNames = ['To do', 'In progress', 'Done'];

  const categoryIndex = arrayCatId.indexOf(catId);

  const arrayButtonNames = arrayCatNames.filter(
    (_, index) => index !== categoryIndex
  );

  const arrayButtonAttributes = arrayCatId.filter(
    (_, index) => index !== categoryIndex
  );

  const taskSwitcherClass = isLast ? css.centeredTaskSwitcher : '';

  return (
    <div className={`${css.boxTasKSwitcher} ${taskSwitcherClass}`}>
      <button
        type="button"
        aria-label="Button Task Switcher"
        className={css.btnTaskSwitcher}
        data-category={`${arrayButtonAttributes[0]}`}
        onClick={() => onCategoryChange(arrayButtonAttributes[0])}
      >
        {arrayButtonNames[0]}
        <AiOutlineLogin className={css.taskSwitcherIcon} />
      </button>
      <button
        type="button"
        aria-label="Button Task Switcher"
        className={css.btnTaskSwitcher}
        data-category={`${arrayButtonAttributes[1]}`}
        onClick={() => onCategoryChange(arrayButtonAttributes[1])}
      >
        {arrayButtonNames[1]}
        <AiOutlineLogin className={css.taskSwitcherIcon} />
      </button>
    </div>
  );
}
