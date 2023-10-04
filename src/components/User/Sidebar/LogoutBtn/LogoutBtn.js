import { ReactComponent as LogoutIcon } from 'images/log-out.svg';
import css from './LogoutBtn.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';


export default function LogoutBtn() {
    const dispatch = useDispatch();

    return (
        <button className={css.logout__btn} type="button"
            aria-label="Logout"
            onClick={() => dispatch(logOut())}
        >
            Log out
            <LogoutIcon className={css.logout__icon} />
        </button>
    );
};