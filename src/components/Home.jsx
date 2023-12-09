import "../styles/index.css";

const terminalButton = () => {
  window.location.href = "terminal";
};

const Home = () => {
  return (
    <div className="main-content2">
      <div className="left-column">
        <h1>Welcome to Doobi: Your Ultimate Jeep and Terminal Route Planner</h1>
        <p className="main">
          Are you an adventurous soul, constantly seeking the thrill of off-road
          experiences? Look no further than Doobi! We are your go-to platform
          for all your jeep and terminal route planning needs.
        </p>
        <button className="terminal-button" onClick={() => terminalButton()}>
          Look for Terminals
        </button>
      </div>
      <div className="right-column">
        <img src="/src/images/rroute.png" alt="Route" className="route" />
      </div>
    </div>
  );
};

export default Home;
