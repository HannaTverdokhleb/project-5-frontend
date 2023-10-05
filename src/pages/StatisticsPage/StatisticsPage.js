import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';
import { CalendarDropdown } from 'components/User/CalendarPopup/CalendarPopup';

const StatisticsPage = () => {
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА
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
