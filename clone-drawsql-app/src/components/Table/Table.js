import React, { Fragment, useState, useEffect } from "react";
import TableColumn from "../TableColumn/TableColumn";
import Indexes from "../Indexes/Indexes";
import { columnData } from "../../services/tableColumns.js";
import { indexesData } from "../../services/indexes.js";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

const Table = ({ index, tableObj, dbTables, setDbTables }) => {
  const [columns, setcolumns] = useState(tableObj.columns);
  const [indexes, setIndexes] = useState(tableObj.indexes);
  const [indexComponent, setIndexComponent] = useState(false);

  const addColumn = () => {
    setcolumns([...columns, { ...columnData, id: uuidv4() }]);
  };

  const addIndex = () => {
    setIndexes([...indexes, { ...indexesData, id: uuidv4() }]);
    setIndexComponent(true);
  };

  const deleteTable = () => {
    setDbTables(dbTables.filter((table) => table.id !== tableObj.id));
  };


  useEffect(() => {
    dbTables[dbTables.indexOf(tableObj)] = {
      ...tableObj,
      columns: columns,
      indexes: indexes,
    };
    setDbTables([...dbTables]);
  }, [columns, indexes]);

  return (
    <Fragment>
      <li className="table">
        <input type="checkbox" id="table" className="table__input" />
        <label htmlFor="table" className="table__label"></label>

        <div className="table__header">
          <div className="table__name">{`Table_${index + 1}`}</div>
          <div className="table__buttons">
            <button className="table__button">&#128221;</button>
            <button className="table__button" onClick={deleteTable}>
              &#128465;
            </button>
          </div>
        </div>
        <div className="table__details">
          <div className="table__data">
            {columns &&
              columns.map((column, index) => (
                <TableColumn
                  key={column.id}
                  column={column}
                  columns={columns}
                  setcolumns={setcolumns}
                  index={index}
                />
              ))}

            {indexComponent ? (
              <Indexes
                columns={columns}
                indexes={indexes}
                setIndexes={setIndexes}
                setIndexComponent={setIndexComponent}
              />
            ) : null}
          </div>

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
