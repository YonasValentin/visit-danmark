import { NavLink } from "react-router-dom";
import companylogo from "../assets/img/visitdenmark-small-logo.svg";

export default function Nav() {
  return (
    <nav>
      <NavLink to="#">
        <img src={companylogo} alt="logo-icon"></img>
        <p>Træningsplaner</p>
      </NavLink>
      <NavLink to="#">
        <img src={companylogo} alt="logo-icon"></img>
        <p>Øvelser</p>
      </NavLink>
      <NavLink to="#">
        <img src={companylogo} alt="logo-icon"></img>
        <p>Fremskridt</p>
      </NavLink>
    </nav>
  );
}
