import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { logoutUser } from '../../redux/auth/authOperations';
import style from './UserBar.module.css';

export default function UserBar() {
  const dispatcher = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.userbar}>
      <p className={style.welcome}>
        Welcome <span className={style.name}>{user.name}</span>,{' '}
      </p>
      <button className={style.btn} onClick={() => dispatcher(logoutUser())}>
        Logout
      </button>
    </div>
  );
}
