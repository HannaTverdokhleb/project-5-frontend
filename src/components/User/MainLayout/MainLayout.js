import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { Header } from 'components/User/Header/Header';


const MainLayout = () => {
    const user = useSelector(selectUser);

    return (
        <section className="mainLayout">
            <div className="mainLayoutContainer">
                {/* Тут буде сайдбар */}
                <Header />
                <Outlet context={[user]} />{/* це контент сторінки */}
            </div>
        </section>
    )
}

export default MainLayout;
