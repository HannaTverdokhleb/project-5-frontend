import { useSelector } from 'react-redux';
import css from './Header.module.css';
import UserInfo from '../UserInfo/UserInfo';

export const Header = () => {
  const namePage = useSelector(state => state.currentPage.namePage);
  return (
    <header>
      <section>{<h1 className={css.title}>{namePage}</h1>}</section>
      <section>
        <UserInfo></UserInfo>
      </section>
    </header>
  );
};
