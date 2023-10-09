import { Outlet } from 'react-router-dom';
import { Header } from 'components/User/Header/Header';
import SideBar from '../Sidebar/Sidebar';
import css from './MainLayout.module.css';
import React, { useState } from 'react';

const MainLayout = () => {

  const [isOpenSidebar, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpenSidebar);
  };

  return (
    <section className={css.mainLayout}>
      <div className={css.mainLayoutContainer}>
        <SideBar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
        <div className={css.pageWrapper}>
          <Header isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default MainLayout;

