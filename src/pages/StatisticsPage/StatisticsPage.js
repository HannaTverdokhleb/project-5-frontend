import Header from 'components/User/Header/Header';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
const StatisticsPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('User Profile'));
  return (
    <div>
      <Header />
      Statistics
    </div>
  );
};

export default StatisticsPage;
