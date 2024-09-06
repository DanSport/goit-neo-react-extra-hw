import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserIsLoading, logoutUser } from '../../redux/auth';
import style from './UserBar.module.css';

export default function UserBar() {
  const dispatcher = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectUserIsLoading);

  return (
    <div className={style.userbar}>
      <p className={style.welcome}>
        Welcome <span className={style.name}>{user.name}</span>,{' '}
      </p>
      <button className={style.btn} onClick={() => dispatcher(logoutUser())} disabled={isLoading}>
        {isLoading ? 'Wait...' : 'Logout'}
      </button>
    </div>
  );
}
