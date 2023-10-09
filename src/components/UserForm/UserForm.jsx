import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';
import { editUser, patchAvatar } from 'redux/Auth/operations';
import moment from 'moment';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader/Loader';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import SetPasswordBtn from 'components/PasswordForm/SetPasswordBtn';


const userSchema = Yup.object().shape({
  name: Yup.string()
    .max(16, 'Length must be less then 16')
    .required('Your name is required'),
  email: Yup.string()
    .email(/^[a-z].+([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z]+[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Invalid e-mail')
    .required('Your e-mail is required'),
  birthday: Yup.string().nullable(),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter your phone number in format +380123456789')
    .nullable()
    .required(),
  skype: Yup.string().max(16, 'Length must be less then 16').nullable(),
});


const UserForm = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const [isLoadingAva, setIsLoadingAva] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  let birthday = '';
  if (user.birthday) {
    birthday = moment(user.birthday).format('YYYY-MM-DD');
  }

  const initialValues = {
    name: user.name || '',
    birthday,
    email: user.email || '',
    phone: user.phone ? '+' + user.phone : '',
    skype: user.skype || '',
  };

  const isGoogleAccount = /\w.+@gmail.com$/.test(user?.email)

  const handleSubmit = values => {
    setIsLoadingForm(true);
    dispatch(editUser(values))
    .then(data => {
      setIsLoadingForm(false);
      if (data.type === 'user/edit/fulfilled') {
        Notify.info('Your profile has been updated successfully.');
      } else if (data.type === 'user/edit/rejected') {
        Notify.failure('Something went wrong, ' + data.payload);
      }
    })
    .catch(error => {
      Notify.failure('Something went wrong, ' + error.message);
    });
  };

  function handleFile(evt) {
    setIsLoadingAva(true);
    const ava = evt.target.files[0];
    dispatch(patchAvatar(ava))
    .then(data => {
      setIsLoadingAva(false);
      if (data.type === 'user/patchAvatar/fulfilled') {
        Notify.info('Your avatar has been updated successfully.');
      } else if (data.type === 'user/patchAvatar/rejected') {
        Notify.failure('Something went wrong, try again or upload another image.');
      }
    })
    .catch(error => {
      Notify.failure('Something went wrong, ' + error.message);
    });
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <div className={css.userContainer}>

          <div className={css.avatarContainer}>
            {!isLoadingAva ?
              <>
                <label className={css.avararLabel}>
                  <input type="file" name="ava" onChange={handleFile} className={css.avatarInput} title="Add new image!"/>
                </label>

                {user.avatarURL ?
                  <img src={user.avatarURL} alt="avatar" width="120" height="120" className={css.avatarImage} />
                  :
                  <AiOutlineUser className={css.avatarImage} style={{width: 120, height: 120, color: '#3e85f3'}} />
                }

                <div className={css.plusInBorder}><span>+</span></div>
              </> :
              <div className={css.avatarContainerLoader}><Loader absolute={true} /></div>
            }
          </div>

          <h2 className={css.avatarUserName}>{user.name || 'User'}</h2>
          <p className={css.avatarUserType}>User</p>

          <Form className={css.userForm} autoComplete='on'>
            <div className={css.inputPrimaryWrapper}>
              <div className={css.inputFirstWrapper}>
                <label className={css.userLabel}>
                  User Name
                    <Field
                      className={css.userInput}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                    ></Field>
                    <ErrorMessage name="name" component="div" />
                  </label>
                  <label className={css.userLabel}>
                    Birthday
                    <Field
                      className={css.userInput}
                      type="date"
                      name="birthday"
                      id="birthday"
                      placeholder="Enter your birthday"
                      lang="en-US"
                    ></Field>
                    <ErrorMessage name="birthday" component="div" />
                  </label>
                <label className={css.userLabel}>
                  Email {isGoogleAccount && <SetPasswordBtn />}
                  <Field
                    className={css.userInput}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your name"
                  ></Field>
                  <ErrorMessage name="email" component="div" />
                </label>
              </div>
              <div className={css.inputSecondWrapper}>
                <label className={css.userLabel}>
                  Phone
                  <Field
                    className={css.userInput}
                    type="tel"
                    name="phone"
                    placeholder="+380"
                  ></Field>
                  <ErrorMessage name="phone" component="div" />
                </label>
                <label className={css.userLabel}>
                  Skype
                  <Field
                    className={css.userInput}
                    type="text"
                    name="skype"
                    placeholder="Enter your Skype"
                  ></Field>
                  <ErrorMessage name="skype" component="div" />
                </label>
              </div>
            </div>
            <button className={css.submitBtn} type="submit">
              Save Changes
            </button>

            {isLoadingForm && <Loader absolute={true} />}
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default UserForm;
