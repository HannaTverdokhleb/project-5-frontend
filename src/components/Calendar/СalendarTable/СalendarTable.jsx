import css from './СalendarTable.module.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../configs/routes';
import moment from 'moment/moment';
import classNames from 'classnames';

const firstDateMonth = '1-4-2023';
const tasks = [
  {
    dayValue: 1,
    text: 'Learn how to stady',
  },
  {
    dayValue: 15,
    text: 'Create a work',
  },
  {
    dayValue: 20,
    text: 'Create new letter',
  },
];

let Calendar = firstDateMonth => {
  const day = Number(firstDateMonth.split('-')[0]);
  const month = Number(firstDateMonth.split('-')[1]) - 1; //номер місяця з 0
  const year = Number(firstDateMonth.split('-')[2]);

  const date = new Date(year, month, day);
  const dayOfWeek = Number(date.getDay()); //номер дня неділі (1 понеділок)
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  let table = [];

  for (let i = 1; i < 36; i++) {
    let textTask = '';
    let dayValue = '';
    if (i >= dayOfWeek && lastDayOfMonth > i - dayOfWeek) {
      dayValue = i - dayOfWeek + 1;
    }

    for (const task of tasks) {
      if (task.dayValue === dayValue) {
        textTask = task.text;
      }
    }

    table.push({
      dayValue,
      textTask,
    });
  }
  return table;
};

export const CalendarTable = () => {
  const CalendarTable = Calendar(firstDateMonth);
  const navigate = useNavigate();

  const handleDayClick = (dayValue) => {
    const currentMonth = moment().format('YYYY-MM');
    const day = /^\d$/.test(dayValue) ? `0${dayValue}` : dayValue;

    navigate(`${routes.private.day.path.replace(':day', `${currentMonth}-${day}`)}`);
  };

  return (
    <ul className={css.container}>
      {CalendarTable.map((element, i) => {
        return (
          <li key={i}
              className={classNames(css.element, {
                [css.elementLink]: element.dayValue,
              })}
              onClick={() => {
                element.dayValue && handleDayClick(element.dayValue);
                return false;
              }}>
            <p className={css.textDays}>{element.dayValue}</p>
            <div className={css.textTask}>{element.textTask}</div>
          </li>
        );
      })}
    </ul>
  );
};
