import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { RxCross1 } from 'react-icons/rx';
import logoSidebar from 'images/logoSidebar.png';
import css from './Sidebar.module.css';

export default function SideBar({ toggleSidebar, isOpenSidebar }) {

  return (
    <aside className={`${css.sidebar} ${isOpenSidebar ? css.openSidebar : ''}`}>
      <button
        className={css.close__btn}
        onClick={toggleSidebar}
        type='button'
        aria-label='Close'
      >
        <RxCross1 className={css.close__icon} />
      </button>
      {/*SideBarlogo*/}
      <div className={css.box__logosidebar}>
        <img
          width='71'
          height='68'
          src={logoSidebar}
          alt='SidebarLogo'
          className={css.logo__sidebar}
        ></img>
        <h2 className={css.logo__title}>G</h2>
        <span className={css.logo__change}>oo</span>
        <h2 className={css.logo__title}>seTrack</h2>
      </div>
      <p className={css.aside__title}>User Panel</p>
      <UserNav toggleSidebar={toggleSidebar} />
      <LogoutBtn />
    </aside>
  );
};

