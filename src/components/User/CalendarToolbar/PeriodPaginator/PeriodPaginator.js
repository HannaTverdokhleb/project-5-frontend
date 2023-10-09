import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import css from './PeriodPaginator.module.css';



export default function PeriodPaginator() {
    return (<div className={css.paginatorBox}>
        <button aria-label="Period calendar paginator button left"
             type="button"
            className={css.btnLeft}>
            <AiOutlineLeft className={css.iconPaginator} />
        </button>
        <button aria-label="Period calendar paginator button right"
            type="button"
            className={css.btnRight}>
            <AiOutlineRight  className={css.iconPaginator}/>
        </button>       
   </div>) 
};