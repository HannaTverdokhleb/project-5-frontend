import css from './Sidebar.module.css'
import { RxCross1 } from 'react-icons/rx';
import UserNav from './UserNav/UserNav';

export default function SideBar({ toggle }) {
  return (
    <aside className={css.container}>
      <button className={css.close__btn} onClick={toggle} type="button">
        <RxCross1 className={css.close__icon} />
      </button>
          {/*<SideBarLogo />*/}
      <h2 className={css.aside__title}>User Panel</h2>
      <UserNav/>
      {/*<LogoutBtn />*/}
    </aside>
  );
};