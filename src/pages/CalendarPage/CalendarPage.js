import { useOutletContext } from 'react-router-dom';


const CalendarPage = () => {
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return (
    <div className="calendarPage">
      Calendar
    </div>
  );
};

export default CalendarPage;
