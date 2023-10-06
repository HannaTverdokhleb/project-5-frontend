import { NavLink } from 'react-router-dom';
import { ReactComponent as UserIcon } from 'images/user-sideBar.svg';
import { ReactComponent as CalendarIcon } from 'images/calendar-side-bar.svg';
import { BsBarChart as StatIcon } from 'react-icons/bs';
import css from './UserNav.module.css';

function UserNav() {

  
    return (
        <nav className={css.sidebarNav}>
            <ul className={css.nav_container}>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/account">
                       <UserIcon className={css.nav__icon}/>
                        My account
                    </NavLink>
                </li>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/calendar">
                        <CalendarIcon className={css.nav__icon}/>
                        Calendar
                    </NavLink>
                </li>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/statistics">
                      <StatIcon className={css.nav__icon}/>
                      Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default UserNav;