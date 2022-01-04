import React, { useState } from "react";
import Table from "../Table/Table";
import { columnData } from "../../services/tableColumns.js";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

const SideBar = ({ setDbTables, dbTables }) => {
  const tableData = {
    id: uuidv4(),
    name: "",
    columns: [],
    indexes: [],
    comment: "",
    color: "",
  };

  const createTable = () => {
    setDbTables([
      ...dbTables,
      {
        ...tableData,
        id: uuidv4(),
        columns: [{ ...columnData, id: uuidv4() }],
      },
    ]);
  };

  return (
    <aside className="sideBar">
      <input type="checkbox" id="menu" className="sideBar__input" />
      <label className="sideBar__label" htmlFor="menu"></label>
      <section className="sideBar__nav">
        <div className="sideBar__newTable">
          <div className="sideBar__name">Tables</div>
          <button className="button button-full" onClick={createTable}>
            &#x271A; New Table
          </button>
        </div>
        <div className="sideBar__tables">
          <ul className="sideBar__list-tables">
            {dbTables &&
              dbTables.map((tableObj, index) => (
                <Table
                  key={tableObj.id}
                  index={index}
                  tableObj={tableObj}
                  dbTables={dbTables}
                  setDbTables={setDbTables}
                />
              ))}
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
