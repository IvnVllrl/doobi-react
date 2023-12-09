import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AddJeepModal = ({ fetchAndDisplayData }) => {
  const [jeepName, setJeepName] = useState("");
  const [jeepColor, setJeepColor] = useState("");
  const [maxSeats, setMaxSeats] = useState(1);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const addJeep = async () => {
    try {
      console.log("sad");
      const formData = new FormData();
      formData.append("jeepName", jeepName);
      formData.append("jeepColor", jeepColor);
      formData.append("maxSeats", maxSeats);
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8080/doobi-finals-react/src/server/add_jeep_ajax.php",
        formData
      );

      if (response.data.status === "success") {
        fetchAndDisplayData();
        // Optionally, reset the form fields after successful addition
        setJeepName("");
        setJeepColor("");
        setMaxSeats(1);
        setFile(null);
      }
    } catch (error) {
      console.error("Error adding Jeep: ", error);
    }
  };

  return (
    <div id="AddJeepModal" className="modal">
      <div className="modal-content">
        <span className="close" /* Add close functionality if needed */>
          &times;
        </span>
        <h2>Add Jeep</h2>
        <label htmlFor="jeepName">Jeep Name:</label>
        <input
          type="text"
          id="jeepName"
          value={jeepName}
          onChange={(e) => setJeepName(e.target.value)}
        />
        <label htmlFor="jeepColor">Jeep Color:</label>
        <input
          type="text"
          id="jeepColor"
          value={jeepColor}
          onChange={(e) => setJeepColor(e.target.value)}
        />
        <label htmlFor="maxSeats">Maximum Seats:</label>
        <input
          type="number"
          id="maxSeats"
          value={maxSeats}
          onChange={(e) => setMaxSeats(Number(e.target.value))}
        />
        <label htmlFor="file">Upload Route File:</label>
        <input type="file" id="file" onChange={handleFileChange} />
        <button className="add-jeep" type="button" onClick={addJeep}>
          Add Jeep
        </button>
      </div>
    </div>
  );
};

AddJeepModal.propTypes = {
  fetchAndDisplayData: PropTypes.func.isRequired,
};

export default AddJeepModal;
