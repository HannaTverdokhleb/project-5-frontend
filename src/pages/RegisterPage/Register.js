import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';

const LoginPage = () => {
  return (
    <div>
      <RegisterForm />
      <AuthNavigate authLink={'/login'} linkText={'Log In'} />
    </div>
  );
};

export default LoginPage;
