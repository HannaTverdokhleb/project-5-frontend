import { NavLink } from 'react-router-dom';
import css from './PeriodTypeSelect.module.css'

export default function PeriodTypeSelect() {
    return (
         <nav className={css.navigation}>
      <NavLink
        to="calendar/month"
                className={({ isActive }) => `${css['periodBtnLeft']}  ${isActive ? css['active'] : ''}`} 
      >
        Month
      </NavLink>
      <NavLink
        to="calendar/day"
        className={({ isActive }) => `${css['periodBtnRight']}  ${isActive ? css['active'] : ''}`} 
      >
      Day  
      </NavLink>
    </nav>
  ); 
}