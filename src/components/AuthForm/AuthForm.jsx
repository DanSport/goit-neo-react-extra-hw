import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import style from './AuthForm.module.css';
// import { useDispatch } from 'react-redux';

export default function AuthForm({ doRegister = false, onSubmit }) {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={doRegister ? {...initialValues, name: ''} : initialValues}>
      <Form autoComplete="on" className={clsx(style.form, doRegister && style.registerForm)}>
        {doRegister && (
          <label htmlFor="name" className={style.label}>
            Name
            <Field name="name" className={style.field} />
          </label>
        )}

        <label htmlFor="email" className={style.label}>
          Email
          <Field name="email" type="email" className={style.field} />
        </label>

        <label htmlFor="password" className={style.label}>
          Password
          <Field name="password" type="password" className={style.field} />
        </label>

        <button type="submit">Submit</button>
        {doRegister ? <Link to="/login">login instead</Link> : <Link to="/register">register new account</Link>}
      </Form>
    </Formik>
  );
}

AuthForm.propTypes = {
  doRegister: PropTypes.bool,
  onSubmit: PropTypes.func,
};
