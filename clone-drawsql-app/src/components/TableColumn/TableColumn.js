import React from "react";
import "./styles.scss";

const TableColumn = ({ column, deleteColumn, setNameColumn }) => {

  return (
    <div className="details">
      <div className="details__id">
        <input
          type="text"
          className="details__input-data details__input--id"
          value={column.name}
          onChange={setNameColumn}
        />
      </div>

      <div className="details__type">
        <div className="details__input-data">
          <span className="details__input-type">int</span>
        </div>
      </div>

      <div className="details__options">
        <button className="details__button"> N </button>
        <button className="details__button">&#128477;</button>
        <button className="details__button" onClick={deleteColumn}>&#128465;</button>
      </div>
    </div>
  );
};

export default TableColumn;
