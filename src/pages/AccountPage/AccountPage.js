import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const AccountPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('User Profile'));
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return <div className="accountPage">Account</div>;
};

export default AccountPage;
