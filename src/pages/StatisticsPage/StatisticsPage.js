import { useOutletContext } from 'react-router-dom';


const StatisticsPage = () => {
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return (
    <div className="statisticsPage">
      Statistics
    </div>
  );
};

export default StatisticsPage;
