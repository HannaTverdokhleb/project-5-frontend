import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { Header } from 'components/User/Header/Header';
import SideBar from '../Sidebar/Sidebar';
import css from './MainLayout.module.css';


const MainLayout = () => {
    const user = useSelector(selectUser);

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

export default MainLayout;
