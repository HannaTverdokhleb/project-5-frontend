import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';
import css from './PeriodTypeSelect.module.css';

export default function PeriodTypeSelect() {
  const { day, month } = useParams();
  const now = moment();
  let date;
  if (month) {
    if (month === now.format('YYYY-MM')) {
      date = moment(month + '-' + now.format('DD'), 'YYYY-MM-DD');
    } else {
      date = moment(month + '-01', 'YYYY-MM-DD');
    }
  } else {
    date = moment(day, 'YYYY-MM-DD');
  }

  return (
    <nav className={css.navigation}>
      <NavLink to={'/calendar/month/' + date.format('YYYY-MM')}
        className={({ isActive }) => `${css['periodBtnLeft']}  ${isActive ? css['active'] : ''}`} 
      >Month</NavLink>
      <NavLink to={'/calendar/day/' + date.format('YYYY-MM-DD')}
        className={({ isActive }) => `${css['periodBtnRight']}  ${isActive ? css['active'] : ''}`} 
      >Day </NavLink>
    </nav>
  ); 
}