import React from "react";
import Indexes from "../Indexes/Indexes";
import TableColumn from "../TableColumn/TableColumn";
import "./styles.scss";

const TableCard = ({ table, index }) => {
  return (
    <div className="card">
      <div className="card__title">
        <h2>{`Table_${index + 1}`}</h2>
      </div>
      <div className="card__details">
        <div className="card__columns">
          {/*<TableColumn
            columns={table.columns}
          />*/}
        </div>
        <div className="card__indexes">
          {table.indexes.length >= 1 ? (
            <Indexes indexes={table.indexes} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TableCard;
