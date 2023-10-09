import React, { createContext, useContext, useState, useEffect } from 'react';

const DateContext = createContext();

const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const DateProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedDate = formatDate(currentDate);

  return (
    <DateContext.Provider value={formattedDate}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  return useContext(DateContext);
};
