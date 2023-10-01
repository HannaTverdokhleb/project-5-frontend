import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';

const RegisterPage = () => {
  return (
    <div>
      <RegisterForm />
      <AuthNavigate authLink={'/register'} linkText={'Sign up'} />
    </div>
  );
};

export default RegisterPage;
