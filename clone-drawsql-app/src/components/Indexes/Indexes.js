import React from "react";
import "./styles.scss";

const Indexes = ({ children }) => {
  return (
    <div className="indexes">
      <div className="indexes__title">Indexes</div>
      <div className="indexes__list">{children}</div>
    </div>
  );
};

export default Indexes;
