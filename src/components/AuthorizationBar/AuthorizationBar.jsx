import { Link } from 'react-router-dom';
import style from './AuthorizationBar.module.css';

export default function AuthorizationBar() {
  return (
    <div>
      <Link className={style.link} to="/login">
        Login
      </Link>
      &nbsp;/&nbsp;
      <Link className={style.link} to="/register">
        Register
      </Link>
    </div>
  );
}
