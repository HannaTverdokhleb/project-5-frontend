import css from './СalendarTitle.module.css';

export const CalendarTitle = () => {
  const DaysWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  return (
    <ul className={css.container}>
      {DaysWeek.map(day => (
        <li key={day} className={css.element}>
          <p className={css.textTitle}>{day}</p>
        </li>
      ))}
    </ul>
  );
};
