import React from "react";
import "./styles.scss";

const Navigation = () => {

  const saveChanges = () => {
    console.log("saving changes...");
  }

  const showPopUp = () => {
    console.log("showing Pop up...");
  }


  return (
    <nav className="nav">
      <div className="nav__main">
        <a href="!#" className="nav__index">
          <img src="./database.svg" alt="drawsql-logo" className="nav__logo" />
          <div className="nav__name">
            draw<span className="nav__name--big">SQL</span>
          </div>
        </a>
        <div className="nav__options">
          <div className="nav__item">File</div>
          <div className="nav__item">Share</div>
        </div>
      </div>

      <div className="nav__type-name">
        <a href="" className="nav__type-document">Diagrams</a>
        <span className="color-lila"> > </span>
        copy react
      </div>

      <div className="nav__save-change">
        <p className="nav__change-text">
          <span className="nav__change-text--alert">Unsaved changes</span>
        </p>

        <button
          className="save-changes save-changes--radius"
          onClick={saveChanges}
        >
          Save
        </button>

        <button
          className="pop-up pop-up--radius"
          onClick={showPopUp}
        >
          <img src="./down-arrow.svg" alt="" className="pop-up__arrow"/>
        </button>

        <div className="nav__profile">
          <img src="./account.png" alt="test-picture-profile" />
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
