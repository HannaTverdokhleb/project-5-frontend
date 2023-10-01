import { LoginForm } from 'components/LoginForm/LoginForm';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';

const LoginPage = () => {

  return (
    <div>
      <LoginForm />
      <AuthNavigate authLink={'/register'} linkText={'Sign up'} />
    </div>
  );
};

export default LoginPage;
