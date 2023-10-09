import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '@smastrom/react-rating/style.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
<<<<<<< Updated upstream
// import Loader from 'components/Loader/Loader';

// import { useState } from 'react';
=======

>>>>>>> Stashed changes
import { useDispatch } from 'react-redux';

import {
  patchPassword,
} from 'redux/Auth/operations';
<<<<<<< Updated upstream
// import { selectOwnReviews, selectReviewLoading } from 'redux/reviews/reviewsSelectors';
=======
>>>>>>> Stashed changes

import { RxCross1 } from 'react-icons/rx';

import css from './index.module.css';

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Please Enter more than 6 characters.')
    .required('Password is required'),
});

const Index = ({ onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
  };

  const handleSubmit = (values, _) => {
    const { password } = values;
    console.log(password);
    dispatch(patchPassword(password))
      .then(data => {
        if (data.type === 'user/patchPassword/fulfilled') {
          Notify.info('New password has been set.');
        } else if (data.type === 'user/patchPassword/rejected') {
          Notify.failure('Something went wrong, ' + data.payload);
        }
        onClose();
      })
      .catch(error => {
        Notify.failure('Something went wrong, ' + error.message);
        onClose();
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PasswordSchema}
    >
      {({ values }) => (
        <div className={css.formContainer}>
          <Form>
            <div className={css.editBtnWrapper}>
              <label className={css.formLabel} htmlFor='password'>
                Set password
              </label>
            </div>

            <div className={css.formInputWrap}>
              <Field
                className={css.formInput}
                type='password'
                name='password'
                id='password'
                placeholder='Enter password'
                component='input'
              ></Field>
              <ErrorMessage
                className={css.formErrorMessage}
                name='password'
                component='div'
              />
            </div>
            <div className={css.formMainButtons}>
              <button className={css.submitBtn} type='submit'>
                Save
              </button>
              <button
                className={css.cancelBtn}
                type='button'
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <button
              className={css.cancelCrossBtn}
              type='button'
              aria-label='close button'
              onClick={onClose}
            >
              <RxCross1 className={css.iconClose} style={{ width: 24, height: 24 }} />
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Index;
