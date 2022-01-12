import React, { Fragment }from "react";
import "./styles.scss";

const Table = ({ index, handleDeleteTable, addColumn, addIndex, children }) => {

  return (
    <Fragment>
      <li className="table">
        <input type="checkbox" id="table" className="table__input" />
        <label htmlFor="table" className="table__label"></label>

        <div className="table__header">
          <div className="table__name">{`Table_${index + 1}`}</div>
          <div className="table__buttons">
            <button className="table__button">&#128221;</button>
            <button className="table__button" onClick={handleDeleteTable}>
              &#128465;
            </button>
          </div>
        </div>
        <div className="table__details">
          <div className="table__data">{children}</div>

          <div className="table__data">
            <div className="table__row">
              <div>&#x2599;</div>
              <div>&#x205D;</div>
              <button
                className="button button-off sideBar__button"
                onClick={addIndex}
              >
                Add Index
              </button>
              <button
                className="button button-light sideBar__button"
                onClick={addColumn}
              >
                Add Column
              </button>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default Table;
