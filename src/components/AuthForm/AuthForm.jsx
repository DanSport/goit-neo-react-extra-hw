import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import style from './AuthForm.module.css';
import { useSelector } from 'react-redux';
import { selectUserError, selectUserIsLoading } from '../../redux/auth';
// import { useDispatch } from 'react-redux';

export default function AuthForm({ doRegister = false, onSubmit }) {
  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectUserIsLoading);
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={doRegister ? { ...initialValues, name: '' } : initialValues}>
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Wait...' : 'Submit'}
          </button>
          {doRegister ? <Link to="/login">Login instead</Link> : <Link to="/register">Register new account</Link>}
        </Form>
      </Formik>

      {!!error && <div style={{ color: 'red', fontSize: '24px', textAlign: 'center', width: '100%', margin: '20px 0 0' }}>Error authenticating</div>}
    </>
  );
}

AuthForm.propTypes = {
  doRegister: PropTypes.bool,
  onSubmit: PropTypes.func,
};
