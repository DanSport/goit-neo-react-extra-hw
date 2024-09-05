import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { loginUser } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router';

export default function LoginPage() {
  const dispatcher = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const doLogin = userData => dispatcher(loginUser(userData));

  return isLoggedIn ? <Navigate to="/" /> : <AuthForm doRegister={false} onSubmit={doLogin} />;
}
