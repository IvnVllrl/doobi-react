import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const JeepDetailsModal = ({ jeep, closeModal }) => {
  const [editJeepName, setEditJeepName] = useState(jeep.jeepney_name);
  const [editJeepColor, setEditJeepColor] = useState(jeep.jeepney_color);
  const [editMaxSeats, setEditMaxSeats] = useState(jeep.jeepney_seats);
  const [originalFilePath] = useState(jeep.file_route);

  const saveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("jeepId", jeep.id);
      formData.append("editJeepName", editJeepName);
      formData.append("editJeepColor", editJeepColor);
      formData.append("editMaxSeats", editMaxSeats);

      const response = await axios.post(
        "http://localhost:8080/doobi-finals-react/src/server/update_jeep_ajax.php",
        formData
      );

      if (response.data.status === "success") {
        closeModal();
      }
    } catch (error) {
      console.error("Error updating Jeep information: ", error);
    }
  };

  const deleteJeep = async () => {
    try {
      const formData = new FormData();
      formData.append("jeepId", jeep.id);

      const response = await axios.post(
        "http://localhost:8080/doobi-finals-react/src/server/delete_jeep_ajax.php",
        formData
      );

      if (response.data.status === "success") {
        closeModal();
      }
    } catch (error) {
      console.error("Error deleting Jeep information: ", error);
    }
  };

  return (
    <div className="modal" id="DetailsModal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Jeep Details</h2>
        <form>
          <input type="hidden" name="jeepId" value={jeep.id} />
          <label htmlFor="editJeepName">Jeep Name:</label>
          <input
            type="text"
            name="editJeepName"
            value={editJeepName}
            onChange={(e) => setEditJeepName(e.target.value)}
            required
          />

          <label htmlFor="editJeepColor">Jeep Color:</label>
          <input
            type="color"
            name="editJeepColor"
            value={editJeepColor}
            onChange={(e) => setEditJeepColor(e.target.value)}
            required
          />

          <label htmlFor="editMaxSeats">Maximum Seats:</label>
          <input
            type="number"
            name="editMaxSeats"
            min="14"
            value={editMaxSeats}
            onChange={(e) => setEditMaxSeats(e.target.value)}
            required
          />

          <input
            type="hidden"
            name="originalFilePath"
            value={originalFilePath}
          />

          <div className="button-container">
            <button type="button" className="save-jeep" onClick={saveChanges}>
              Save Changes
            </button>
            <button type="button" className="delete-jeep" onClick={deleteJeep}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

JeepDetailsModal.propTypes = {
  jeep: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jeepney_name: PropTypes.string.isRequired,
    jeepney_color: PropTypes.string.isRequired,
    jeepney_seats: PropTypes.number.isRequired,
    file_route: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default JeepDetailsModal;
