import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const CalendarPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('Calendar'));
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return <div className="calendarPage">Calendar</div>;
};

export default CalendarPage;
