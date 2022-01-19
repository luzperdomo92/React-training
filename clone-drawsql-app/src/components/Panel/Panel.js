import React from "react";
import TableCard from "../TableCard/TableCard";
import "./styles.scss";

const Panel = ({ dbTables, setDbTables }) => {
  return (
    <div className="content-panel">
      <div className="content-panel__render">
        {dbTables &&
          dbTables.map((table, index) => (
            <TableCard key={table.id} table={table} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Panel;
