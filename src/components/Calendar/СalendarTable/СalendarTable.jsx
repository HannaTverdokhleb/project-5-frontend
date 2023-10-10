import css from './СalendarTable.module.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../configs/routes';
import classNames from 'classnames';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../redux/Tasks/operations';
import { selectTasks } from '../../../redux/Tasks/selectors';

const dateFormat = firstDateMonth => {
  const dayOfWeek = Number(moment(firstDateMonth, 'DD-MM-YYYY').isoWeekday()); //1-понеділок
  const lastDayOfMonth = Number(
    moment(firstDateMonth, 'DD-MM-YYYY').endOf('month').format('DD')
  );


  return { dayOfWeek, lastDayOfMonth };
};
//

let fillCalendar = (firstDateMonth, allTasks) => {

  const { dayOfWeek, lastDayOfMonth} =
    dateFormat(firstDateMonth);

  allTasks = allTasks.filter(
    task =>
      moment(task.date, 'YYYY-MM-DD').format('MM-YYYY') ===
      moment(firstDateMonth, 'DD-MM-YYYY').format('MM-YYYY')
  );

  const tasks = allTasks.map(task => ({
    dayValue: +moment(task.date).format('DD'),
    text: task.title,
    priority: task.priority,
  }));

  let table = [];

  const lastNumberOfTable = dayOfWeek + lastDayOfMonth > 36 ? 43 : 36;

  for (let i = 1; i < lastNumberOfTable; i++) {
    let textTask = '';
    let dayValue = '';
    let priority = '';
    if (i >= dayOfWeek && lastDayOfMonth > i - dayOfWeek) {
      dayValue = i - dayOfWeek + 1;
    }

    for (const task of tasks) {
      if (task.dayValue === dayValue) {
        textTask = task.text;
        priority = task.priority;
      }
    }

    table.push({
      dayValue,
      textTask,
      priority,
      lastNumberOfTable,
    });
  }
  return table;
};

export const CalendarTable = ({ month }) => {
  const date = moment(month).format('DD-MM-YYYY');
  const curMonth = moment(month).format('MM') - 1;
  const curYear = moment(month).format('YYYY');
  const tasks = useSelector(selectTasks);
  const CalendarTable = fillCalendar(date, tasks);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDayClick = dayValue => {
    const day = /^\d$/.test(dayValue) ? `0${dayValue}` : dayValue;

    navigate(`${routes.private.day.path.replace(':day', `${month}-${day}`)}`);
  };

  const lastNumberOfTable = CalendarTable[0].lastNumberOfTable;
  let curDate = moment().format('DD-MM-YYYY');

  return (
    <ul className={css.container} data={lastNumberOfTable}>
      {CalendarTable.map((element, i) => {
        let curDateCell = moment([curYear, curMonth, element.dayValue]).format(
          'DD-MM-YYYY'
        );
        let isCurrent = curDate === curDateCell ? 'true' : 'false';

        return (
          <li
            key={i}
            className={classNames(css.element, {
              [css.elementLink]: element.dayValue,
            })}
            onClick={() => {
              element.dayValue && handleDayClick(element.dayValue);
              return false;
            }}
          >
            <div className={css.textDays} isсurrent={isCurrent}>
              {element.dayValue}
            </div>
            <div className={css.textTask} data-priority={element.priority}>
              {element.textTask}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
