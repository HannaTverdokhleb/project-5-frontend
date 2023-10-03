import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';

import moment from 'moment/moment';
const dayMoment = moment().format('DD/MM/YYYY');

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const skypeRegExp = /^@[a-z0-9_]{1,16}$/;

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .max(16, 'Max 16 characters required'),
  birthday: Yup.date().max(dayMoment, 'Birthday must be earlier than today'),
  email: Yup.string().email('Invalid e-mail').required('Email is required'),
  phone: Yup.string()
    .required()
    .min(11)
    .max(11)
    .matches(phoneRegExp, 'Phone number must be 11 digits or more'),

  skype: Yup.string().required().min(5).max(15).matches(skypeRegExp),
});

const handleSubmit = values => {
  console.log(values);
};

const UserForm = () => {
  const initialValues = {
    name: '',
    birthday: '',
    email: '',
    phone: '',
    skype: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={userSchema}
      >
        <Form>
          <label className={css.userLabel} htmlFor="name">
            User Name
          </label>
          <Field
            className={css.userInput}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          ></Field>
          <ErrorMessage name="name" component="div" />

          <label className={css.userLabel} htmlFor="name">
            Phone
          </label>
          <Field
            className={css.userInput}
            type="tel"
            name="phone"
            id="phone"
            placeholder="+380"
          ></Field>

          <label className={css.userLabel} htmlFor="birthday">
            Birthday
          </label>
          <Field
            className={css.userInput}
            type="text"
            name="birthday"
            id="birthday"
            placeholder="Enter your birthday"
          ></Field>

          <label className={css.userLabel} htmlFor="skype">
            Skype
          </label>
          <Field
            className={css.userInput}
            type="text"
            name="skype"
            id="skype"
            placeholder="Enter your Skype"
          ></Field>

          <label className={css.userLabel} htmlFor="email">
            Email
          </label>
          <Field
            className={css.userInput}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your name"
          ></Field>
          <button className={css.submitBtn} type="submit">
            Save Changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
