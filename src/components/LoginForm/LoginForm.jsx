import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { logIn } from 'redux/Auth/operations';
import { selectIsLoading } from 'redux/Auth/selectors';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import gooseSvg from '../../images/right.svg';
import errorsvg from '../../images/error.svg';
import successsvg from '../../images/success.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationLoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Your password can not be so short')
      .max(16, 'Your password can not be so long')
      .required('Password is required'),
  });

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (
      !/^[a-z].+([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z]+[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        value
      )
    ) {
      error = 'Email is not valid';
    }
    return error;
  }

  const notify_config = {
    width: '320px',
    timeout: 4000,
    position: 'top-right',
  }

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({
      email,
      password,
    }))
    .then(response => {
      if (response.type === 'auth/login/rejected') {
        Notify.failure(response.payload, notify_config);
      } else if (response.type === 'auth/login/fulfilled') {
        Notify.success('Login successful', notify_config);
      }
    })
    .catch((error) => {
      Notify.failure(error.message, notify_config);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationLoginSchema}
          >
            {({ errors, touched }) => (
              <Form className={css.form} action="#" autoComplete="off">
                <div className={css.form_div}>
                  <label className={css.form_label}>
                    <span
                      className={`${css.form_input_email} ${
                        touched.email && errors.email ? css.error : ''
                      } ${
                        touched.email && !errors.email ? css.success : ''
                      }`}
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
                          touched.email && !errors.email
                            ? css.success
                            : ''
                        }`}
                        name="email"
                        type="email"
                        placeholder="nadiia@gmail.com"
                        autoComplete="email"
                        aria-invalid={
                          touched.email && errors.email ? 'true' : 'false'
                        }
                        data-valid={
                          touched.email && !errors.email
                            ? 'true'
                            : 'false'
                        }
                        validate={validateEmail}
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
                      <p className={css.success}>Email is valid</p>
                    )}
                    <ErrorMessage
                      name="email"
                      render={message => (
                        <p className={css.error}>{message}</p>
                      )}
                    />
                  </label>

                  <label className={css.form_label_tw}>
                    <span
                      className={`${css.form_input_email} ${
                        touched.password && errors.password
                          ? css.error
                          : ''
                      } ${
                        touched.password && !errors.password
                          ? css.success
                          : ''
                      }`}
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
                    >
                      Password
                    </span>
                    <div className={css.form_input_div}>
                      <Field
                        className={`${css.form_input} ${
                          touched.password && errors.password
                            ? css.error
                            : ''
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
                      <p className={css.success}>Password is valid</p>
                    )}
                    <ErrorMessage
                      name="password"
                      render={message => (
                        <p className={css.error}>{message}</p>
                      )}
                    />
                  </label>
                  {/* {errorMessage && <p>{errorMessage}</p>} */}
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
      )}
    </>
  );
};
