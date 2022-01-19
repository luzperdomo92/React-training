import React from "react";
import "./styles.scss";

const TableIndexes = ({ indexColumn, deleteIndex }) => {
  return (
    <div className="index">
      <div className="index__name">
        <div className="index__input">
          {/*<select name="" id="">
            {columns && columns.map(column => (
              <option key={column.id} value={column.id}>{column.name}</option>
            ))}
          </select>*/}
        </div>
      </div>

      {deleteIndex && (
        <div className="index__elements">
          <div className="index__type"></div>
          <button className="index__button" onClick={deleteIndex}>
            &#128465;
          </button>
        </div>
      )}
    </div>
  );
};

export default TableIndexes;
