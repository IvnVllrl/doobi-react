import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/terminal-style.css";

const AdminTerminal = () => {
  const [jeepData, setJeepData] = useState({ MBLCT: [], MARQUEE: [] });

  useEffect(() => {
    const fetchData = async (terminal) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/doobi-finals-react/src/server/fetch_data.php?terminal=${encodeURIComponent(
            terminal
          )}`
        );
        setJeepData((prevData) => ({ ...prevData, [terminal]: response.data }));
      } catch (error) {
        console.error(`Error fetching data for ${terminal}: ${error}`);
      }
    };

    const fetchAndDisplayData = () => {
      fetchData("MBLCT");
      fetchData("MARQUEE");
    };

    fetchAndDisplayData();

    // Fetch data every 1 sec
    const intervalId = setInterval(fetchAndDisplayData, 1000);
    // Clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-content2">
      <div className="left-section">
        <h1>Explore Jeep Terminals</h1>
        <p>
          Discover real-time information about jeep availability at various
          terminals. Plan your journey with accurate and up-to-date data on
          terminal routes and jeep schedules.
        </p>
      </div>
      <div className="right-section">
        {Object.entries(jeepData).map(([terminal, data]) => (
          <div className="shape" key={terminal}>
            <h1>{terminal}</h1>
            <p>AVAILABLE JEEPS</p>
            <div className="shape2" id={`${terminal}-section`}>
              {data.map((item) => (
                <div
                  className="jeep-item-terminal"
                  data-jeep-id={item.jeepney_id}
                  key={item.jeepney_id}
                >
                  <div className="jeep-content-terminal">
                    <p className="jeep-counter">{`${item.jeepney_counter} / ${item.jeepney_seats}`}</p>
                    <p className="jeep-name">{item.jeepney_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTerminal;
