import { NavLink } from 'react-router-dom';
import CompanyLogo from '../assets/img/visitdenmark-small-logo.svg';

export default function Nav() {
  return (
    <nav>
      <NavLink to='#'>
        <img src={CompanyLogo} alt='logo-icon'></img>
      </NavLink>
      <NavLink to='#'></NavLink>
      <NavLink to='#'></NavLink>
    </nav>
  );
}
