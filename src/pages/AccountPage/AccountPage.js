import Header from 'components/User/Header/Header';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
const AccountPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('User Profile'));
  return (
    <div>
      Account
      <Header />
    </div>
  );
};

export default AccountPage;
