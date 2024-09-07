import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { loginUser, registerUser, selectIsLoggedIn } from '../../redux/auth';
import { Navigate } from 'react-router';

export default function AuthPage({ doRegister = false }) {
  const dispatcher = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const doAuth = userData => {
    if (doRegister) dispatcher(registerUser(userData));
    else dispatcher(loginUser(userData));
  };

  return isLoggedIn ? <Navigate to="/" /> : <AuthForm doRegister={doRegister} onSubmit={doAuth} />;
}

AuthPage.propTypes = {
  doRegister: PropTypes.bool,
};
