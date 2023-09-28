import React, { useState, useEffect } from 'react';

const ThemeTogler = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        <img
          src="/images/mobileImages/logo/logo_mob@1x.png"
          alt={theme ? 'moon' : 'sun'}
          width="8"
          height="8"
        />
      </button>
    </div>
  );
};

export default ThemeTogler;
