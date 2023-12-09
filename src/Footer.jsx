import facebook from "./images/logo-footer/facebook.png";
import github from "./images/logo-footer/github.png";
import instagram from "./images/logo-footer/instagram.png";
import twitter from "./images/logo-footer/twitter.png";
import youtube from "./images/logo-footer/youtube.png";

import logo from "./images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo" />
          <p>
            Discover passenger counts and explore detailed routes for a
            hassle-free commute. Empowering you with accurate data, Doobi is
            your guide to seamless travel in the world of jeepneys.
          </p>
        </div>
        <div className="footer-middle">
          <h2>Contact Us</h2>
          <p>Email: doobi@support.co</p>
          <p>Telephone No: +123-45-6789</p>
        </div>
        <div className="footer-right">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="icon">
              <img src={facebook} alt="Facebook" className="iconLogo" />
            </a>
            <a href="#" className="icon">
              <img src={twitter} alt="Twitter" className="iconLogo" />
            </a>
            <a href="#" className="icon">
              <img src={instagram} alt="Instagram" className="iconLogo" />
            </a>
            <a href="#" className="icon">
              <img src={youtube} alt="Youtube" className="iconLogo" />
            </a>
            <a href="#" className="icon">
              <img src={github} alt="GitHub" className="iconLogo" />
            </a>
          </div>
          <p>&copy; 2023 Doobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
