import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserIsLoading, logoutUser } from '../../redux/auth';
import { clearContacts } from '../../redux/contacts';
import style from './UserBar.module.css';

export default function UserBar() {
  const dispatcher = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectUserIsLoading);

  const doLogout = () => {
    dispatcher(logoutUser());
    dispatcher(clearContacts());
  };

  return (
    <div className={style.userbar}>
      <p className={style.welcome}>
        Welcome <span className={style.name}>{user.name}</span>,{' '}
      </p>
      <button className={style.btn} onClick={doLogout} disabled={isLoading}>
        {isLoading ? 'Wait...' : 'Logout'}
      </button>
    </div>
  );
}
