import css from './LoginForm.module.css';
import loginGoose from '../../images/desktopImages/loginPage/loginGoose_desk@1x.png';
import loginGoosex2 from '../../images/desktopImages/loginPage/loginGoose_desk@2x.png';

export const LoginForm = () => {
  return (
    <div className={css.div_container}>
      <div className={css.div_container_flex}>
        <picture className={css.logo_goose}>
          <source
            className={css.source}
            srcset={`${loginGoose} 1x, ${loginGoosex2} 2x`}
            media="(min-width: 1440px)"
          />
          <img src={loginGoose} alt="rocket" />
        </picture>
        <div className={css.div_container_form}>
          <div className={css.div_container_formik}>
            <h2 className={css.title}>Log In</h2>
            <form className={css.form} action="#" autocomplete="off">
              <div className={css.form_div}>
                <label htmlFor="email" className={css.form_label}>
                  <span>Email</span>
                  <div className={css.form_input_div}>
                    <input
                      className={css.form_input}
                      name="email"
                      type="email"
                      placeholder="nadiia@gmail.com"
                    />
                  </div>
                </label>
                <label htmlFor="password" className={css.form_label}>
                  <span>Password</span>
                  <div className={css.form_input_div}>
                    <input
                      className={css.form_input}
                      name="password"
                      type="password"
                      placeholder="●●●●●●●"
                    />
                  </div>
                </label>
                <button className={css.button} type="submit">
                  Log In
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5M8.33333 5.83333L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <a
              className={css.google}
              href="https://goose-track-backend-54zr.onrender.com/auth/google"
            >
              Click me to authorize with Google!
            </a>
          </div>
          <div className={css.register}>
            <a
              className={css.signup}
              href="goose-track-backend-54zr.onrender.com/register"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
