import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';
import registerGoose from '../../images/desktopImages/signUpPage/elements_desk@1x.png';
import registerGoosex2 from '../../images/desktopImages/signUpPage/elements_desk@2x.png';
import css from './Register.module.css';



const RegisterPage = () => {
  return (
    <section className={css.form_section}>
      <div className={css.div_container}>
        <picture className={css.logo_goose}>
          <source className={css.source} srcSet={`${registerGoose} 1x, ${registerGoosex2} 2x`}/>
          <img srcSet={registerGoose} alt="goose" />
        </picture>
          <div className={css.div_container_formik}>
            <h2 className={css.title}>Sign Up</h2>
            <RegisterForm />
            <a className={css.google} href="https://goose-track-backend-54zr.onrender.com/auth/google">Click me to authorize with Google!</a>
          </div>
          <div className={css.register}>
              <AuthNavigate authLink={'/login'} linkText={'Log in'} />
            </div>
      </div>
    </section>
  );
};

export default RegisterPage;
