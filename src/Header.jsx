import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/jeepney" activeclassname="active">
              Jeepney Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/terminal" activeclassname="active">
              Terminal
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeclassname="active">
              Admin Panel
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
