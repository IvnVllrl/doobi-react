import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminHeader = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="/src/images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/AdminJeepney" activeclassname="active">
              Jeepney Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/AdminTerminal" activeclassname="active">
              Terminal
            </NavLink>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

AdminHeader.propTypes = {
  setIsAdmin: PropTypes.func.isRequired,
};

export default AdminHeader;
