import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';
import { CalendarDropdown } from 'components/User/CalendarPopup/CalendarPopup';
import css from './StatisticPage.module.css';
import moment from 'moment';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState(moment());

  useEffect(() => {
    dispatch(currentPage('Statistics'));
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div className={css.boxToolbar}>
        <CalendarDropdown day={day} setDay={setDay} />
      </div>
      <StatisticsChart />
    </section>
  );
};

export default StatisticsPage;
