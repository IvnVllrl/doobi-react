import { useEffect, useState } from "react";
import "../styles/jeepney.css";
import axios from "axios";

const JeepneyInfo = () => {
  const [jeepneyData, setJeepneyData] = useState([]);

  useEffect(() => {
    fetchAndDisplayData();
  }, []);

  const fetchAndDisplayData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doobi-finals-react/src/server/pass_info.php"
      );
      setJeepneyData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const openRouteFile = (filePath) => {
    // Open the file in a new tab or window
    window.open(filePath, "_blank");
  };

  const displayData = () => {
    return (
      <ul className="jeep-list">
        {jeepneyData.map((item) => (
          <li className="jeep-item" key={item.id}>
            <span className="jeep-name">{item.jeepney_name}</span>
            <button
              className="details-button"
              // onClick={() => openModalWithDetails(item)}
            >
              See Details
            </button>
            <button
              className="see-route-button"
              onClick={() => openRouteFile(item.file_route)}
            >
              See Route
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="main-content">
      <h1 className="header-jeepney">Check Jeep Information</h1>
      <p>Have a look at the Jeep Names, Colors, Seats, and Jeepney Routes</p>
      <div className="jeep-content" id="dataSection">
        {jeepneyData.length > 0 ? (
          displayData()
        ) : (
          <p>No jeep information available.</p>
        )}
      </div>
    </div>
  );
};

export default JeepneyInfo;
