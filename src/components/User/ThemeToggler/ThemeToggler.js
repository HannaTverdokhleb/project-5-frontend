import { useEffect, useState } from 'react';
import css from './ThemeToggler.module.css';
import moonSvg from 'images/moon.svg';
import sunSvg from 'images/sun.svg';

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className={css.buttonTheme} type="button" onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <img src={moonSvg} alt="Місяць" />
        </>
      ) : (
        <>
          <img src={sunSvg} alt="Сонце" />
        </>
      )}
    </button>
  );
};

export default ThemeToggler;
