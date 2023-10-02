import { Header } from 'components/User/Header/Header';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';


const CalendarPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('Calendar'));
  return (
    <div>
      <Header />
      Calendar
    </div>
  );
};

export default CalendarPage;
