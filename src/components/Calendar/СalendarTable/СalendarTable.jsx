import css from './СalendarTable.module.css';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../configs/routes';
import classNames from 'classnames';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../redux/Tasks/operations';
import { selectTasks } from '../../../redux/Tasks/selectors';

<<<<<<< Updated upstream
const dateFormat = firstDateMonth => {
  const dayOfWeek = Number(moment(firstDateMonth, 'DD-MM-YYYY').isoWeekday()); //1-понеділок
  const lastDayOfMonth = Number(
    moment(firstDateMonth, 'DD-MM-YYYY').endOf('month').format('DD')
  );
  const currentMonth = Number(moment(firstDateMonth, 'DD-MM-YYYY').month()) + 1;

  return { dayOfWeek, lastDayOfMonth, currentMonth };
};

=======

import React from 'react';

const CalendarGrid = (props) => {
  // Получаем год и месяц из пропсов, все задачи и функцию щелчка на дне календаря
  const { month, data, handleDayClick } = props;
  const [year, monthStr] = month.split('-');
  const selectedMonth = parseInt(monthStr, 10) - 1; // Месяцы в JavaScript начинаются с 0 (январь).

  // Фильтруем задачи по выбранному месяцу
  const filteredTasks = data.filter(task => {
    const taskDate = new Date(task.date);
    return taskDate.getFullYear() === parseInt(year, 10) && taskDate.getMonth() === selectedMonth;
  });

  // Создаем сетку календаря для выбранного месяца
  const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate();
  const calendarGrid = [];

  for (let day = 1; day <= daysInMonth; day++) {
    calendarGrid.push(
      <li key={day} className={css.element}>
        <p className={css.textDays}>{day}</p>
        {/*{filteredTasks.map(task => {*/}
        {/*  const taskDate = new Date(task.date);*/}
        {/*  // if (taskDate.getDate() === day) {*/}
        {/*  //   // Отображаем задачу как компонент*/}
        {/*  //   return (*/}
        {/*  //     <li key={task._id} className={css.element}>*/}
        {/*  //       <p>{task.title}</p>*/}
        {/*  //     </li>*/}
        {/*  //   );*/}
        {/*  // }*/}
        {/*  return null;*/}
        {/*})}*/}
      </li>,
    );
  }

  return (
    <ul className={css.container}>
      {calendarGrid}
      {/*<ul className={css.container}>*/}
      {/*  {CalendarTable.map((element, i) => {*/}
      {/*    return (*/}
      {/*      <li key={i}*/}
      {/*          className={classNames(css.element, {*/}
      {/*            [css.elementLink]: element.dayValue,*/}
      {/*          })}*/}
      {/*          onClick={() => {*/}
      {/*            element.dayValue && handleDayClick(element.dayValue);*/}
      {/*            return false;*/}
      {/*          }}>*/}
      {/*        <p className={css.textDays}>{element.dayValue}</p>*/}
      {/*        <div className={css.textTask}>{element.textTask}</div>*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ul>*/}
    </ul>
  );
};


export default CalendarGrid;


// TODO: refactoring this all та зроби окремий компонент на відображення дня!
>>>>>>> Stashed changes
let fillCalendar = (firstDateMonth, allTasks) => {
  // firstDateMonth = '01-10-2023'; // це для тестування

  const { dayOfWeek, lastDayOfMonth, currentMonth } =
    dateFormat(firstDateMonth);

  allTasks = allTasks.filter(
    task => Number(moment(task.date, 'DD-MM-YYYY').month()) + 1 === currentMonth
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
  // Получаем все! задачи из стейта и месяц в календаре из пропсов
  const tasks = useSelector(selectTasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

<<<<<<< Updated upstream
  const handleDayClick = dayValue => {
=======
  // Переход на выбранный день календаря (нужен только день)
  const handleDayClick = (dayValue) => {
>>>>>>> Stashed changes
    const day = /^\d$/.test(dayValue) ? `0${dayValue}` : dayValue;
    navigate(`${routes.private.day.path.replace(':day', `${month}-${day}`)}`);
  };

<<<<<<< Updated upstream
  const lastNumberOfTable = CalendarTable[0].lastNumberOfTable;

  return (
    <ul className={css.container} data={lastNumberOfTable}>
      {CalendarTable.map((element, i) => {
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
            <p className={css.textDays}>{element.dayValue}</p>
            <div className={css.textTask} data-priority={element.priority}>
              {element.textTask}
            </div>
          </li>
        );
      })}
    </ul>
=======
  // Далее, имея все наобходимые данные, передаём управление построителю сетки
  return (
    <CalendarGrid month={month} data={tasks} handleDayClick={handleDayClick} />
>>>>>>> Stashed changes
  );
};
