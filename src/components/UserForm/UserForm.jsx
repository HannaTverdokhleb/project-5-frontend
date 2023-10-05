import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Length must be less then 15')
    .required('Your name is required'),
  email: Yup.string()
    .email('Invalid e-mail')
    .required('Your e-mail is required'),
  birthday: Yup.date().nullable(),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Enter your phone number in format +380')
    .nullable(),
  skype: Yup.string().max(16, 'Length must be less then 16').nullable(),
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
        validationSchema={userSchema}
      >
        <div className={css.userContainer}>
          <div className={css.avatarContainer}>
            <label htmlFor="userImgUrl"></label>
            <div className={css.plusInBorder}></div>A
          </div>
          <h2 className={css.avatarUserName}>Nadiia Doe</h2>
          <p className={css.avatarUserType}>User</p>

          <Form className={css.userForm}>
            <div className={css.inputPrimaryWrapper}>
              <div className={css.inputFirstWrapper}>
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
              </div>

              <div className={css.inputSecondWrapper}>
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
              </div>
            </div>

            <button className={css.submitBtn} type="submit">
              Save Changes
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default UserForm;
