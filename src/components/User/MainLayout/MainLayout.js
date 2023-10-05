import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { Header } from 'components/User/Header/Header';
import SideBar from '../Sidebar/Sidebar';
import css from './MainLayout.module.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/operations';

const MainLayout = () => {
  
  const [isOpenSidebar, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpenSidebar)
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const user = useSelector(selectUser);

  return (
    <section className={css.mainLayout}>
      <div className={css.mainLayoutContainer}>
        <SideBar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
        <div className={css.pageWrapper}>
          <Header  isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar}/>
          <Outlet context={[user]} />
          {/* це контент сторінки */}
        </div>
      </div>
    </section>
  );
};

export default MainLayout;

