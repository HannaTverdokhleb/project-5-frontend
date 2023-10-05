import UserForm from '../../components/UserForm/UserForm';

import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('User Profile'));
  }, [dispatch]);
  
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return (
    <div className="accountPage">
      <UserForm />
    </div>
  );
};

export default AccountPage;
