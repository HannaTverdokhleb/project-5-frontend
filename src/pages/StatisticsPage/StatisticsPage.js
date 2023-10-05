import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';
import { CalendarDropdown } from 'components/User/CalendarPopup/CalendarPopup';

const StatisticsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('Statistics'));
  }, [dispatch]);

  return (
    <div>
      <CalendarDropdown />
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
