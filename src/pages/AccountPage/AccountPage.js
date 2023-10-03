import { useOutletContext } from 'react-router-dom';

const AccountPage = () => {
  const [user] = useOutletContext();
  console.log(user); // ТУТ ВСЯ ІНФА ПРО ЮЗЕРА, ЯКЩО ТРЕБА

  return <div className="accountPage">Account</div>;
};

export default AccountPage;
