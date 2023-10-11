import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import css from './PeriodPaginator.module.css';


export default function PeriodPaginator({ leftClick, rightClick, page }) {
  return (
  <div className={css.paginatorBox} id={page}>
    <button aria-label='Period calendar paginator button left'
            type='button'
            className={css.btnLeft}
            onClick={leftClick}
    >
      <AiOutlineLeft className={css.iconPaginator} />
    </button>
    <button aria-label='Period calendar paginator button right'
            type='button'
            className={css.btnRight}
            onClick={rightClick}
    >
      <AiOutlineRight className={css.iconPaginator} />
    </button>
  </div>);
};
