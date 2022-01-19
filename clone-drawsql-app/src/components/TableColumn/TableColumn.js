import React from "react";
import "./styles.scss";

const TableColumn = ({ deleteColumn, index, setNameColumn }) => {
  return (
    <div className="details">
      <div className="details__id">
        <input
          type="text"
          className="details__input--id"
          placeholder={index === 0 ? "id" : `column_${index + 1}`}
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
        <button className="details__button" onClick={deleteColumn}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

export default TableColumn;
