import { useSelector } from 'react-redux';
import css from './Header.module.css';
import UserInfo from '../UserInfo/UserInfo';

import { RxHamburgerMenu } from 'react-icons/rx';

import ThemeToggler from '../ThemeToggler/ThemeToggler';

export const Header = () => {
  const namePage = useSelector(state => state.currentPage.namePage);

  return (
    <header>
      <button
        type="button"
        className={css.burgerButton}
        aria-label="open close burger menu"
      >
        <RxHamburgerMenu className={css.burgerIcon} />
      </button>
      <section>{<h1 className={css.title}>{namePage}</h1>}</section>
      <section className={css.info}>
        <ThemeToggler></ThemeToggler>
        <UserInfo></UserInfo>
      </section>
    </header>
  );
};
