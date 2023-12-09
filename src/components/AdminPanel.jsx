import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/admin-style.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/doobi-finals-react/src/server/admin_login.php",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        localStorage.setItem("isAdmin", JSON.stringify(true));
        setIsAdmin(true);
        navigate("/AdminJeepney", { replace: true });
      } else {
        setErrorMessage("Incorrect Username/Password. Please try again!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="main-content">
      <h1>Sign in as Administrator</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-labelledby="username"
          placeholder="Username"
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-labelledby="password"
            placeholder="Password"
          />
          <button
            id="togglePassword"
            type="button"
            onClick={togglePasswordVisibility}
          >
            &#128065;
          </button>
        </div>
        <div id="errorMessage">{errorMessage}</div>
        <button type="submit" id="button">
          Sign In
        </button>
      </form>
    </div>
  );
};

AdminPanel.propTypes = {
  setIsAdmin: PropTypes.func.isRequired,
};

export default AdminPanel;
