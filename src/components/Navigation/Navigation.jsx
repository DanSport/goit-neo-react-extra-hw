import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (<nav className={style.nav}>
    <ul className={style.nav}>
      <li>
        <NavLink activeClassName={style.active} className={style.link} to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
      <li>
        <NavLink activeClassName={style.active} className={style.link} to="/contacts">Contacts</NavLink>
      </li>
      )}
    </ul></nav>
  );
}
