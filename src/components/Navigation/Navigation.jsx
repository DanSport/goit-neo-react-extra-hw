import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

export default function Navigation() {
  return (<nav className={style.nav}>
    <ul className={style.nav}>
      <li>
        <NavLink activeClassName={style.active} className={style.link} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} className={style.link} to="/contacts">Contacts</NavLink>
      </li>
    </ul></nav>
  );
}
