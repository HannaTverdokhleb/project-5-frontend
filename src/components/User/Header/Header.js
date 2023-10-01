import ThemeToggler from '../ThemeToggler/ThemeToggler';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <section>
        <h1 className={css.title}>Zaglushka</h1>
        <ThemeToggler></ThemeToggler>
      </section>
    </header>
  );
};
