import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { Header } from 'components/User/Header/Header';
import SideBar from '../Sidebar/Sidebar';
import css from './MainLayout.module.css';
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
const MainLayout = () => {
    const user = useSelector(selectUser);

<<<<<<< Updated upstream
    return (
        <section className={css.mainLayout}>
            <div className={css.mainLayoutContainer}>
                <SideBar />
                <div className={css.pageWrapper}>
                    <Header />
                    <Outlet context={[user]} />{/* це контент сторінки */}
                </div>
            </div>
        </section>
    )
}
=======
  return (
    <section className="mainLayout">
      <div className={css.mainLayoutContainer}>
        {/* тут буде сайдбар */}
        <SideBar />
        <Header />
        <Outlet context={[user]} />
        {/* це контент сторінки */}
      </div>
    </section>
  );
};
>>>>>>> Stashed changes

export default MainLayout;
