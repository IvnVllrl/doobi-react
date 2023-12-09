// AdminInfo.js
import { useEffect, useState } from "react";
import axios from "axios";
import JeepDetailsModal from "./JeepDetailsModal"; // Create JeepDetailsModal component
import AddJeepModal from "./AddJeepModal"; // Create AddJeepModal component
import "../styles/jeep-style.css";

const openModal = (modalID) => {
  document.getElementById(modalID).style.display = "flex";
};

const closeModal = (modalID) => {
  document.getElementById(modalID).style.display = "none";
};

const AdminInfo = () => {
  const [jeepneyData, setJeepneyData] = useState([]);
  const [selectedJeep, setSelectedJeep] = useState(null);

  useEffect(() => {
    fetchAndDisplayData();
  }, []);

  const fetchAndDisplayData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/doobi-finals-react/src/server/fetch_info.php"
      );
      setJeepneyData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const openRouteFile = (filePath) => {
    window.open(filePath, "_blank");
  };

  const openModalWithDetails = (jeep) => {
    setSelectedJeep(jeep);
  };

  const displayData = () => {
    return (
      <ul className="jeep-list">
        {jeepneyData.map((item) => (
          <li className="jeep-item" key={item.id} data-jeep-id={item.id}>
            <span className="jeep-name">{item.jeepney_name}</span>
            <button
              className="details-button"
              onClick={() => openModalWithDetails(item)}
            >
              Edit Details
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
      <h1 className="header-jeepney">Jeep Information</h1>
      <div className="add-jeep-wrapper">
        <button
          className="addJeep-info"
          onClick={() => openModal("AddJeepModal")}
        >
          ADD JEEP
        </button>
      </div>
      <div className="jeep-content" id="dataSection">
        {jeepneyData.length > 0 ? (
          displayData()
        ) : (
          <p>No jeep information available.</p>
        )}
      </div>

      {/* Details Modal */}
      {selectedJeep && (
        <JeepDetailsModal jeep={selectedJeep} closeModal={closeModal} />
      )}
      {/* Add Jeep Modal */}
      <AddJeepModal fetchAndDisplayData={fetchAndDisplayData} />
    </div>
  );
};

export default AdminInfo;
