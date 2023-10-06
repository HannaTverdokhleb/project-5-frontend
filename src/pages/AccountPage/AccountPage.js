import UserForm from '../../components/UserForm/UserForm';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('User Profile'));
  }, [dispatch]);
  
  return (
    <div className="accountPage">
      <UserForm />
    </div>
  );
};

export default AccountPage;
