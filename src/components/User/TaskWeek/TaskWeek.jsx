import css from './TaskWeek.module.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';

export const TaskWeek = () => {
  const { day } = useParams();
  const DaysWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const DoW = moment(day, 'YYYY-MM-DD').startOf('isoweek');

  return (
    <ul className={css.container}>
      {DaysWeek.map((weekDay, i) => {
        DoW.add(i === 0 ? i : 1, 'days');
        return (
        <li key={weekDay} className={css.element}>
          <p className={css.textTitle}>
            <span className={css.dow}>{weekDay}</span>-
            {day === DoW.format('YYYY-MM-DD') ?
              <strong className={css.dayItem}>{DoW.format('D')}</strong> :
              <span className={css.dayItem}>{DoW.format('D')}</span>
            }
          </p>
        </li>
      )})}
    </ul>
  );
};
