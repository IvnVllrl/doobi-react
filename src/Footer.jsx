const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src="/src/images/logo.png" alt="Logo" />
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
              <img
                src="/src/images/logo-footer/facebook.png"
                alt="Facebook"
                className="iconLogo"
              />
            </a>
            <a href="#" className="icon">
              <img
                src="/src/images/logo-footer/twitter.png"
                alt="Twitter"
                className="iconLogo"
              />
            </a>
            <a href="#" className="icon">
              <img
                src="/src/images/logo-footer/instagram.png"
                alt="Instagram"
                className="iconLogo"
              />
            </a>
            <a href="#" className="icon">
              <img
                src="/src/images/logo-footer/youtube.png"
                alt="Youtube"
                className="iconLogo"
              />
            </a>
            <a href="#" className="icon">
              <img
                src="/src/images/logo-footer/github.png"
                alt="GitHub"
                className="iconLogo"
              />
            </a>
          </div>
          <p>&copy; 2023 Doobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
