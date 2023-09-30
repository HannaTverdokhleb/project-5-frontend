// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
// import { logIn } from 'redux/Auth/operations';

import loginGoose from '../../images/desktopImages/loginPage/loginGoose_desk@1x.png';
import loginGoosex2 from '../../images/desktopImages/loginPage/loginGoose_desk@2x.png';

import gooseSvg from '../../images/right.svg';
import errorsvg from '../../images/error.svg';
import successsvg from '../../images/success.svg';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationLoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('This is an ERROR email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Your password can not be so short')
      .max(16, 'Your password can not be so long')
      .required('Password is required'),
  });

  // const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    // dispatch(logIn(value));
    resetForm();
  };

  return (
    <div className={css.div_container}>
      <div className={css.div_container_flex}>
        <picture className={css.logo_goose}>
          <source
            className={css.source}
            srcSet={`${loginGoose} 1x, ${loginGoosex2} 2x`}
          />
          <img srcSet={loginGoose} alt="rocket" />
        </picture>

        <div className={css.div_container_form}>
          <div className={css.div_container_formik}>
            <h2 className={css.title}>Log In</h2>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationLoginSchema}
            >
              {({ errors, touched }) => (
                <Form className={css.form} action="#" autoComplete="off">
                  <div className={css.form_div}>
                    <label htmlFor="email" className={css.form_label}>
                      <span
                        className={`${css.form_input_email} ${
                          touched.email && errors.email ? css.error : ''
                        } ${touched.email && !errors.email ? css.success : ''}`}
                        aria-invalid={
                          touched.email && errors.email ? 'true' : 'false'
                        }
                        data-valid={
                          touched.email && !errors.email ? 'true' : 'false'
                        }
                      >
                        Email
                      </span>
                      <div className={css.form_input_div}>
                        <Field
                          className={`${css.form_input} ${
                            touched.email && errors.email ? css.error : ''
                          } ${
                            touched.email && !errors.email ? css.success : ''
                          }`}
                          name="email"
                          type="email"
                          placeholder="nadiia@gmail.com"
                          autoComplete="email"
                          aria-invalid={
                            touched.email && errors.email ? 'true' : 'false'
                          }
                          data-valid={
                            touched.email && !errors.email ? 'true' : 'false'
                          }
                        />
                        {touched.email && errors.email && (
                          <img
                            className={css.errorIcon}
                            style={{ width: '24px' }}
                            src={errorsvg}
                            alt="goose"
                          />
                        )}
                        {touched.email && !errors.email && (
                          <img
                            className={css.successIcon}
                            style={{ width: '24px' }}
                            src={successsvg}
                            alt="goose"
                          />
                        )}
                      </div>

                      {touched.email && !errors.email && (
                        <div className={css.success}>
                          This is an CORRECT email
                        </div>
                      )}
                      <ErrorMessage
                        name="email"
                        render={message => (
                          <div className={css.error}>{message}</div>
                        )}
                      />
                    </label>

                    <label htmlFor="password" className={css.form_label_tw}>
                      <span
                        className={`${css.form_input_email} ${
                          touched.password && errors.password ? css.error : ''
                        } ${
                          touched.password && !errors.password
                            ? css.success
                            : ''
                        }`}
                        aria-invalid={
                          touched.password && errors.password ? 'true' : 'false'
                        }
                        data-valid={
                          touched.password && !errors.password
                            ? 'true'
                            : 'false'
                        }
                      >
                        Password
                      </span>
                      <div className={css.form_input_div}>
                        <Field
                          className={`${css.form_input} ${
                            touched.password && errors.password ? css.error : ''
                          } ${
                            touched.password && !errors.password
                              ? css.success
                              : ''
                          }`}
                          name="password"
                          type="password"
                          placeholder="●●●●●●●"
                          autoComplete="password"
                          aria-invalid={
                            touched.password && errors.password
                              ? 'true'
                              : 'false'
                          }
                          data-valid={
                            touched.password && !errors.password
                              ? 'true'
                              : 'false'
                          }
                        />
                        {touched.password && errors.password && (
                          <img
                            className={css.errorIconn}
                            style={{ width: '24px' }}
                            src={errorsvg}
                            alt="goose"
                          />
                        )}
                        {touched.password && !errors.password && (
                          <img
                            className={css.successIconn}
                            style={{ width: '24px' }}
                            src={successsvg}
                            alt="goose"
                          />
                        )}
                      </div>
                      {touched.password && !errors.password && (
                        <div className={css.success}>
                          This is an CORRECT password
                        </div>
                      )}
                      <ErrorMessage
                        name="password"
                        render={message => (
                          <div className={css.error}>{message}</div>
                        )}
                      />
                    </label>

                    <button className={css.button} type="submit">
                      Log In
                      <img
                        style={{ width: '20px' }}
                        src={gooseSvg}
                        alt="goose"
                      />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

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
              href="http://localhost:3000/project-5-frontend/register"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
