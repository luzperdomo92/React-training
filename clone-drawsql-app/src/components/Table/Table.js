import React, { Fragment, useState } from "react";
import "./styles.scss";

const Table = ({
  tableName,
  handleDeleteTable,
  addColumn,
  addIndex,
  children,
  setNameTable,
}) => {
  const [contentEditable, setContentEditable] = useState(false);

  const availableInputEdit = (e) => {
    e.preventDefault();
    setContentEditable(true);
  };

  const KeepOnChangeInput = (e) => {
    setNameTable(e.target.value);
  };

  const saveChangesCloseEdit = (e) => {
    e.preventDefault();

    const emptyStringName = "unnamed_table";
    if (e.target.value !== "") {
      KeepOnChangeInput(e);
    } else {
      setNameTable(emptyStringName);
    }

    setContentEditable(false);
  };

  const saveChangeOnEnter = (e) => {
    if (e.key === "Enter") {
      saveChangesCloseEdit(e);
    }
  };

  return (
    <Fragment>
      <li className="table">
        <input type="checkbox" id="table" className="table__input" />
        <label htmlFor="table" className="table__label"></label>

        <div className="table__header">
          {contentEditable ? (
            <input
              type="text"
              className="table__name table__name-input"
              autoFocus
              onFocus={(e) => e.target.select()}
              onChange={KeepOnChangeInput}
              onBlur={saveChangesCloseEdit}
              onKeyPress={saveChangeOnEnter}
              value={tableName}
            />
          ) : (
            <div className="table__name">{tableName}</div>
          )}

          <div className="table__buttons">
            {contentEditable ? (
              <button
                className="table__button table__button-edit-ok"
                onClick={saveChangesCloseEdit}
              >
                &#9989;
              </button>
            ) : (
              <Fragment>
                <button
                  className="table__button table__button-hover-visibility"
                  onClick={availableInputEdit}
                >
                  &#128221;
                </button>
                <button
                  className="table__button table__button-hover-visibility"
                  onClick={handleDeleteTable}
                >
                  &#128465;
                </button>
              </Fragment>
            )}
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
