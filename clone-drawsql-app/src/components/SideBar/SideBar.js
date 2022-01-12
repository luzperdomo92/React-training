import React, { useState } from "react";
import "./styles.scss";

const SideBar = ({ createTable, children }) => {
  const [open, setOpen] = useState(false);
  const toggleSideBar = () => {
    console.log("toggleSidebar", open);
    setOpen(!open)
  }

  return (
    <aside className="sideBar">
      <input
        type="checkbox"
        id="menu"
        className="sideBar__input"
        // value={open}
        defaultChecked={open}
        onChange={toggleSideBar}
      />
      <label className="sideBar__label" htmlFor="menu"></label>
      <section className="sideBar__nav">
        <div className="sideBar__newTable">
          <div className="sideBar__name">Tables</div>
          <button className="button button-full" onClick={createTable}>
            &#x271A; New Table
          </button>
        </div>
        <div className="sideBar__tables">
          <ul className="sideBar__list-tables">{children}</ul>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
