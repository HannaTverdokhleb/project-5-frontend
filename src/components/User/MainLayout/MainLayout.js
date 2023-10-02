import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <section>
            <div className="mainLayout" style={{display: 'flex'}}>
                <Outlet />
            </div>
        </section>
    )
}

export default MainLayout;