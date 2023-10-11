import { NavLink } from 'react-router-dom';
import css from './PeriodTypeSelect.module.css';
import { routes } from '../../../../configs/routes';

export default function PeriodTypeSelect({ month, day }) {
  return month
    ? <nav className={css.navigation}>
      <NavLink
        to={routes.private.month.path.replace(':month', month)}
        className={({ isActive }) => `${css['periodBtnLeft']}  ${isActive ? css['active'] : ''}`}
      >
        Month
      </NavLink>
      <NavLink
        to={routes.private.day.path.replace(':day', `${month}-01`)}
        className={({ isActive }) => `${css['periodBtnRight']}  ${isActive ? css['active'] : ''}`}
      >
        Day
      </NavLink>
    </nav>
    : <nav className={css.navigation}>
      <NavLink
        to={routes.private.month.path.replace(':month', month)}
        className={({ isActive }) => `${css['periodBtnLeft']}  ${isActive ? css['active'] : ''}`}
      >
        Month
      </NavLink>
      <NavLink
        to={routes.private.day.path.replace(':day', day)}
        className={({ isActive }) => `${css['periodBtnRight']}  ${isActive ? css['active'] : ''}`}
      >
        Day
      </NavLink>
    </nav>;
}
