import css from './СalendarTable.module.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../configs/routes';
import classNames from 'classnames';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../redux/Tasks/operations';
import { selectTasks } from '../../../redux/Tasks/selectors';

// TODO: refactoring this all та зроби окремий компонент на відображення дня!
let fillCalendar = (firstDateMonth, allTasks) => {
  // TODO: filter tasks by current month та зроби з allTask
  const tasks = allTasks.map(task => ({ dayValue: +moment(task.date).format('DD'), text: task.title }));

  // TODO: use moment
  const month = Number(firstDateMonth.split('-')[1]) - 1; //номер місяця з 0
  const year = Number(firstDateMonth.split('-')[2]);

  // TODO: use moment
  const date = new Date(year, month, 1);
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

export const CalendarTable = ({ month }) => {
  const date = moment(month).format('DD-MM-YYYY');
  const tasks = useSelector(selectTasks);
  const CalendarTable = fillCalendar(date, tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDayClick = (dayValue) => {
    const day = /^\d$/.test(dayValue) ? `0${dayValue}` : dayValue;

    navigate(`${routes.private.day.path.replace(':day', `${month}-${day}`)}`);
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
