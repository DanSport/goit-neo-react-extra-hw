import { Link } from 'react-router-dom';
import style from './AuthorizationBar.module.css';

export default function AuthorizationBar() {
  return (
    <Link className={style.link} to="/login">
      Login
    </Link>
  );
}
