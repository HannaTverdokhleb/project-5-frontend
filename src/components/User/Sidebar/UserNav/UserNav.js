import { NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from '../../../../images/user-sideBar.svg';
import { ReactComponent as CalendarIcon } from '../../../../images/calendar-side-bar.svg';
import { ReactComponent as StatIcon } from '../../../../images/stat.svg';
import css from './UserNav.module.css'

function UserNav() {

  
    return (
        <nav>
            <ul className={css.nav_container}>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/user/account">
                       <UserIcon className={css.nav__icon}/>
                        My account
                    </NavLink>
                </li>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/user/calendar">
                        <CalendarIcon className={css.nav__icon}/>
                        Calendar
                    </NavLink>
                </li>
                <li className={css.nav__item}>
                    <NavLink className={({ isActive }) => `${css['nav__link']}  ${isActive ? css['active'] : ''}`} to="/user/statistics">
                      <StatIcon className={css.nav__icon}/>
                      Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default UserNav;