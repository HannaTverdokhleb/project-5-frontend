import { AiOutlineLogin } from 'react-icons/ai';
import css from './TaskSwitcher.module.css';


export default function TaskSwitcher({ tasks }) {
    console.log(tasks)
    return (
        <div className={css.boxTasKSwitcher}>
            <button type="button" aria-label="Button Task Switcher" className={css.btnTaskSwitcher}>
                In progress
                <AiOutlineLogin className={css.taskSwitcherIcon}/>
            </button>
            <button type="button" aria-label="Button Task Switcher" className={css.btnTaskSwitcher}>
                Done
                <AiOutlineLogin className={css.taskSwitcherIcon}/>
            </button>
        </div>
    );
};