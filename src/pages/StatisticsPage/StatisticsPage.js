import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';
import { CalendarDropdown } from 'components/User/CalendarPopup/CalendarPopup';
import PeriodPaginator from 'components/User/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from 'components/User/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';
import css from './StatisticPage.module.css';

const StatisticsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('Statistics'));
  }, [dispatch]);

  return (
    <div>
      <section className={css.calendarToolbar}>
        <div className={css.boxToolbar}>
          <CalendarDropdown />
          <PeriodPaginator />
        </div>
        <PeriodTypeSelect />
      </section>
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
