import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const StatisticsPage = () => {
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА
  const dispatch = useDispatch();
  dispatch(currentPage('Statistics'));

  return <div className="statisticsPage">Statistics</div>;
};

export default StatisticsPage;
