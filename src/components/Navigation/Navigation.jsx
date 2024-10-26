import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <ul className={style.nav}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
