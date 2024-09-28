import { Formik, Form, Field } from 'formik';
// import css from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoading } from "../../redux/auth/selectors";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>
        <button type='submit' disabled={isLoading}>Log In</button>
      </Form>
    </Formik>
  );
}