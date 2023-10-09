import { LoginForm } from 'components/LoginForm/LoginForm';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';
import css from './Login.module.css';
import loginGoose from '../../images/desktopImages/loginPage/loginGoose_desk@1x.png';
import loginGoosex2 from '../../images/desktopImages/loginPage/loginGoose_desk@2x.png';
import logo from '../../images/logoSidebar.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className={css.form_section}>
      <div className={css.div_container}>
        <Link to="/"
        className={css.logo}>
        <img className={css.logoImage} src={logo} alt="logo" />
        <p className={css.logoText}>G<span className={css.logoTextItalic}>oo</span>seTrack</p>
        </Link>
        <picture className={css.logo_goose}>
          <source
            className={css.source}
            srcSet={`${loginGoose} 1x, ${loginGoosex2} 2x`}
          />
          <img srcSet={loginGoose} alt="rocket" />
        </picture>
        <div className={css.div_container_formik}>
          <h2 className={css.title}>Login</h2>
          <LoginForm />
          <a
            className={css.google}
            href="https://goose-track-backend-54zr.onrender.com/auth/google"
          >
            Click me to authorize with Google!
          </a>
        </div>
        <div className={css.register}>
          <AuthNavigate authLink={'/register'} linkText={'Sign up'} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
