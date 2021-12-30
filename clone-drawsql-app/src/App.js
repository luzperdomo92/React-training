import React, { useState } from "react";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import Panel from "components/Panel/Panel";

function App() {
  const [dbTables, setDbTables] = useState([]);
  console.log("dbTable app -->", dbTables);
  return (
    <div className="container">
      <Header />
      <SideBar dbTables={dbTables} setDbTables={setDbTables} />
      <Panel dbTables={dbTables} setDbTables={setDbTables} />
    </div>
  );
}

export default App;
