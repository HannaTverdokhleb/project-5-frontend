import { Formik, Form, Field } from 'formik';

const initialValues = {
  review: 'Enter text',
};

const FeedbackForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <label htmlFor="review">
            Review
            <Field type="text" name="review"></Field>
          </label>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
