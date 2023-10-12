import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import DatePicker, { registerLocale } from 'react-datepicker';
import { routes } from '../../../configs/routes';
import css from './index.module.css';
import PeriodPaginator from '../../User/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import en from 'date-fns/locale/en-GB';

registerLocale('en', en);
export default function CalendarPicker({ month, day }) {
  const navigate = useNavigate();

  const setStyles = (e) => {
    e.target.value !== undefined && setTimeout(() => {
      const [month] = document.getElementsByClassName('react-datepicker__month-container');
      const [header] = month.getElementsByClassName('react-datepicker__header');
      const days = month.getElementsByClassName('react-datepicker__day-name');
      if (header) {
        header.style.backgroundColor = '#3e85f3';
        header.style.borderBottom = '1px solid #fff';
        header.style.margin = '12px';
      }
      if (days) {
        Array.from(days).forEach(day => {
          day.style.color = '#fff';
        });
      }
    });
  };

  const handleChange = date => {
    month && navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(date).format('YYYY-MM'),
      )}`,
    );
    day && navigate(
      `${routes.private.day.path.replace(
        ':day',
        moment(date).format('YYYY-MM-DD'),
      )}`,
    );
  };

  const leftClick = () => {
    month && navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).subtract(1, 'month').format('YYYY-MM'),
      )}`,
    );
    day && navigate(
      `${routes.private.day.path.replace(
        ':day',
        moment(day).subtract(1, 'day').format('YYYY-MM-DD'),
      )}`,
    );
  };

  const rightClick = () => {
    month && navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).add(1, 'month').format('YYYY-MM'),
      )}`,
    );
    day && navigate(
      `${routes.private.day.path.replace(
        ':day',
        moment(day).add(1, 'day').format('YYYY-MM-DD'),
      )}`,
    );
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={css.picker}>
      <button className={css.customInput} onClick={onClick} ref={ref}>
        {value}
      </button>
      <PeriodPaginator
        leftClick={leftClick}
        rightClick={rightClick} />
    </div>
  ));

  const renderMonthContent = (month, shortMonth) => {
    return (
      <div className={css.month}>
        {shortMonth}
      </div>
    );
  };

  const renderDayContent = day => {
    return (
      <div className={css.day}>
        {day}
      </div>
    );
  };

  let range = [];
  for (let i = 1991; i < 2100; i++) {
    range.push(i);
  }

  const renderHeaderContent = ({
                                 date,
                                 changeYear,
                                 changeMonth,
                                 decreaseMonth,
                                 increaseMonth,
                                 prevMonthButtonDisabled,
                                 nextMonthButtonDisabled,
                               }) => {
    return (
      <div className={css.header}>
        <button
          className={css.button}
          onClick={() => {
            leftClick();
            decreaseMonth();
          }}
          disabled={prevMonthButtonDisabled}>
          <AiOutlineLeft />
        </button>
        {day && <>{moment(date).format('MMMM YYYY').toUpperCase()}</>}
        {month && <div className={css.dropdown}>
          <select
            value={month ? moment(month).format('YYYY') : moment(day).format('YYYY')}
            onChange={({ target: { value } }) => {
              month && handleChange(`${value}-${moment().format('MM')}`);
              month && changeMonth(moment().format('MM'));
              month && changeYear(value);
            }}
          >
            {range.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>}
        <button
          className={css.button}
          onClick={() => {
            rightClick();
            increaseMonth();
          }}
          disabled={nextMonthButtonDisabled}>
          <AiOutlineRight />
        </button>
      </div>
    );
  };

  return (
    <div onClick={setStyles}>
      <DatePicker
        locale='en'
        fixedHeight
        showPopperArrow={false}
        showMonthYearPicker={month}
        selected={month
          ? new Date(`${month}-${moment().format('DD')}`)
          : new Date(moment(day).format('YYYY-MM-DD'))
        }
        onChange={handleChange}
        customInput={<CustomInput />}
        calendarClassName={css.calendar}
        renderMonthContent={renderMonthContent}
        renderDayContents={renderDayContent}
        renderCustomHeader={renderHeaderContent}
        dateFormat={month ? 'MMMM yyyy' : 'd MMMM yyyy'}
      />
    </div>

  );
}
