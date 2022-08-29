import React from "react";
import { Link } from "react-router-dom";

const Navigatin = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <button onClick={menuHandler} className="nav-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuActive && (
        <ul className="nav-bar">
          <Link to="/lang">
            <li className="nav-bar__item nav-bar__item_lang"></li>
          </Link>
          <Link to="/about">
            <li className="nav-bar__item nav-bar__item_about"></li>
          </Link>{" "}
          <Link to="/feed">
            <li className="nav-bar__item nav-bar__item_feed"></li>
          </Link>
        </ul>
      )}
    </>
  );
};

export default Navigatin;
