import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { registerUser } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Navigate } from 'react-router';

export default function RegisterPage() {
  const dispatcher = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const doRegister = userData => dispatcher(registerUser(userData));

  return isLoggedIn ? <Navigate to="/" /> : <AuthForm doRegister={true} onSubmit={doRegister} />;
}
