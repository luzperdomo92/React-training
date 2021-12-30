import React, { Fragment, useState, useEffect } from "react";
import TableColumn from "../TableColumn/TableColumn";
import { v4 as uuidv4 } from "uuid";
import { columnData } from "../../services/tableColumns.js";
import "./styles.scss";

const Table = ({ index, tableObj, dbTables, setDbTables }) => {
  const [columns, setcolumns] = useState(tableObj.columns);

  const addColumn = () => {
    setcolumns([...columns, { ...columnData, id: uuidv4() }]);
  };

  useEffect(() => {
    dbTables[dbTables.indexOf(tableObj)] = { ...tableObj, columns: columns };
    setDbTables([...dbTables]);
  }, [columns]);

  return (
    <Fragment>
      <li className="table">
        <input type="checkbox" id="table" className="table__input" />
        <label htmlFor="table" className="table__label"></label>

        <div className="table__header">
          <div className="table__name">{`Table_${index + 1}`}</div>
        </div>
        <div className="table__details">
          <div className="table__data">
            {columns &&
              columns.map((column, index) => (
                <TableColumn
                  key={column.id}
                  column={column}
                  setcolumns={setcolumns}
                  columns={columns}
                  index={index}
                />
              ))}
          </div>

          <div className="table__data">
            <div className="table__row">
              <div>&#x2599;</div>
              <div>&#x205D;</div>
              <button>Add Index</button>
              <button onClick={addColumn}>Add Column</button>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default Table;
