import React, { useState, Fragment } from "react";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import Table from "components/Table/Table";
import TableColumn from "components/TableColumn/TableColumn";
import Indexes from "components/Indexes/Indexes";
import TableIndexes from "components/TableIndexes/TableIndexes";
import { columnData } from "services/tableColumns.js";
import { indexesData } from "services/indexes.js";
import { v4 as uuidv4 } from "uuid";
// import Panel from "components/Panel/Panel";

const tableData = {
  id: uuidv4(),
  name: "",
  columns: [],
  indexes: [],
  comment: "",
  color: "",
};


function App() {
  const [dbTables, setDbTables] = useState([]);

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

  const handleDeleteTable = (id) => {
    setDbTables(dbTables.filter((table) => table.id !== id));
  }

  const addColumn = (tableId) => {
    const newTable = dbTables.map(table => {
      if(table.id === tableId) {
        table.columns = [...table.columns, { ...columnData, id: uuidv4() }]
      }
      return table;
    })

    setDbTables(newTable)
  }

  const deleteColumn = (tableId, columnId) => {
    const newTable = dbTables.map(table => {
      if(table.id === tableId){
        table.columns = table.columns.filter(column => column.id !== columnId)
      }
      return table
    })

    setDbTables(newTable)
  }

  const setNameColumn = (name, tableId, columnId) => {
    const newTable = dbTables.map(table => {
      if(table.id === tableId) {
        let columnToName = table.columns.filter(column => column.id === columnId);
        columnToName.map(columnName => columnName.name = name)
      }
      return table
    })
    setDbTables(newTable)
  }

  const addIndex = (tableId) => {
    const newTable = dbTables.map(table => {
      if(table.id === tableId) {
        table.indexes = [...table.indexes, {...indexesData, id: uuidv4()}]
      }
      return table;
    })
    setDbTables(newTable)
  }

  const deleteIndex = (tableId, indexId) => {
    const newTable = dbTables.map(table => {
      if(table.id === tableId){
        table.indexes = table.indexes.filter(index => index.id !== indexId)
      }
      return table
    })

    setDbTables(newTable)
  }
  console.log("dbTable app -->", dbTables);


  return (
    <div className="container">
      <Header />
      <SideBar dbTables={dbTables} createTable={createTable}>
        {dbTables &&
          dbTables.map((tableObj, index) => (
            <Table
              key={tableObj.id}
              index={index}
              handleDeleteTable={() => handleDeleteTable(tableObj.id)}
              addColumn={() => addColumn(tableObj.id)}
              addIndex={() => addIndex(tableObj.id)}
              // deleteColumn={(columnId) => deleteColumn(tableObj.id, columnId)}
            >
              <Fragment>
                {tableObj.columns.map((column, index) => (
                  <TableColumn
                    key={column.id}
                    column={column}
                    deleteColumn={() => deleteColumn(tableObj.id, column.id)}
                    setNameColumn={(e) => setNameColumn(e.target.value, tableObj.id, column.id)}
                    index={index}
                  />
                ))}

                {tableObj.indexes.length >= 1 ? (
                  <Indexes>
                    {tableObj.indexes && tableObj.indexes.map(index => (
                      <TableIndexes
                        key={index.id}
                        indexColumn={index}
                        deleteIndex={() => deleteIndex(tableObj.id, index.id)}
                      />
                    ))}
                  </Indexes>
                ) : null}

              </Fragment>
            </Table>
          ))}
      </SideBar>
      {/*<Panel dbTables={dbTables} setDbTables={setDbTables} />*/}
    </div>
  );
}

export default App;
