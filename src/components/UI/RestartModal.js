/* eslint-disable react/prop-types */
import React from "react";
import "./RestartModal.css";

function RestartModal(props) {
  return (
    <div className="backdrop">
      <div className="restart-modal">
        <p className="restart-message">restart game?</p>
        <div className="restart-modal-button-container">
          <button className="cancel-button" onClick={props.onCancel}>
            No, Cancel
          </button>
          <button className="restart-button" onClick={props.onRestartGame}>
            Yes, Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestartModal;