import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import css from './CalendarPage.module.css';

const CalendarPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('Calendar'));
  }, [dispatch]);

  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА
  
  return (
		<div className={css.pageWrapper}>
        <div className="calendarPage">Calendar</div>
				<p style={{fontSize: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
				 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				  sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum
					 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
					 dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
					 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu
						lla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
						officia deserunt mollit anim id est laborum "Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						 sunt in culpa qui 
						officia deserunt mollit anim id est laborum."
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
						 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
						 sint occaecat cupidatat non proident, sunt in culpa
						 qui officia deserunt mollit anim id est laborum."
				</p>
   </div>
  )};

export default CalendarPage;
