import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthNavigate from 'components/User/AuthNavigate/AuthNavigate';


const schema = yup.object().shape({
  name: yup.string().max(16).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = ( { name, email, password }, { resetForm } ) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  }

  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Enter your name"  style={{display: 'block'}} />
        <ErrorMessage style={{color: 'red'}} component="p" name="name" />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="Enter email"
          type="email"
          style={{display: 'block'}}
        />
        <ErrorMessage style={{color: 'red'}} component="p" name="email" />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" placeholder="Enter password" 
        style={{display: 'block'}} />
        <ErrorMessage style={{color: 'red'}} component="p" name="password" />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
    <AuthNavigate authLink={'/login'} linkText={'Log In'} />
  </div>
  )
};

export default RegisterPage;