import { useEffect, useState } from 'react';
import css from './ThemeToggler.module.css';
import moonSvg from 'images/moon.svg';
import sunSvg from 'images/sun.svg';
import axios from 'axios';

const changeUserTheme = async theme => {
  await axios.patch('/users/theme', { theme });
};

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    changeUserTheme(theme === 'light' ? 'dark' : 'light').then();
  };

  return (
    <button className={css.ThemeButton} type='button' onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <img className={css.ThemeIcon} src={moonSvg} alt='Місяць' />
        </>
      ) : (
        <>
          <img className={css.ThemeIcon} src={sunSvg} alt='Сонце' />
        </>
      )}
    </button>
  );
};

export default ThemeToggler;
