import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';
import { routes } from '../../../configs/routes';
import css from './index.module.css';
import PeriodPaginator from '../../User/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function CalendarPicker({ month }) {
  const navigate = useNavigate();

  const setStyles = (e) => {
    e.target.value !== undefined && setTimeout(() => {
      const [month] = document.getElementsByClassName('react-datepicker__month-container');
      const [header] = month.getElementsByClassName('react-datepicker__header');
      if (header) {
        header.style.backgroundColor = '#3e85f3';
        header.style.borderBottom = '1px solid #fff';
        header.style.margin = '12px';
      }
    });
  };

  const handleChange = date => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(date).format('YYYY-MM'),
      )}`,
    );
  };

  const leftClick = () => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).subtract(1, 'month').format('YYYY-MM'),
      )}`,
    );
  };

  const rightClick = () => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).add(1, 'month').format('YYYY-MM'),
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

  let range = [];
  for (let i = 1991; i < 2100; i++) {
    range.push(i);
  }

  const renderHeaderContent = ({
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
        <div className={css.dropdown}>
          <select
            value={moment(month).format('YYYY')}
            onChange={({ target: { value } }) => {
              handleChange(`${value}-${moment().format('MM')}`);
              changeMonth(moment().format('MM'));
              changeYear(value);
            }}
          >
            {range.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
        fixedHeight
        showPopperArrow={false}
        showMonthYearPicker={month}
        selected={new Date(`${month}-${moment().format('DD')}`)}
        onChange={handleChange}
        customInput={<CustomInput />}
        calendarClassName={css.calendar}
        renderMonthContent={renderMonthContent}
        renderCustomHeader={renderHeaderContent}
        dateFormat='MMMM yyyy'
      />
    </div>

  );
}
