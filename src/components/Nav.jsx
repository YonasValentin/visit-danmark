import { NavLink } from 'react-router-dom';
import CompanyLogo from '../assets/img/visitdenmark-small-logo.svg';
import Mess from '../assets/img/Mess.png';
import Profile from '../assets/img/Profile.png';

export default function Nav() {
  return (
    
    <nav>
      <NavLink to='/'>
        <img src={CompanyLogo} alt='logo-icon'></img>
      </NavLink>
      <NavLink to='/person'>
        <img src={Mess} alt='mess-icon'></img>
      </NavLink>
      <NavLink to='/lonely'>
        <img src={Profile} alt='profile-icon'></img>
      </NavLink>
    </nav>
  );
}
