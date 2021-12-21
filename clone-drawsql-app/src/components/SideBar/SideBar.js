import React from "react";
import "./styles.scss";

const SideBar = () => {
  return (
    <section className="sideBar">
      <input type="checkbox" id="menu" className="sideBar__input" />
      <label className="sideBar__label" htmlFor="menu"></label>
      <nav className="sideBar__nav">
        <div className="sideBar__newTable">
          <div className="sideBar__name">Tables</div>
          <button
            className="sideBar__addTable"
            onClick={() => console.log("new Table ...")}
          >
            &#x271A; New Table
          </button>
        </div>
      </nav>
    </section>
  );
};

export default SideBar;
