import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="menu">
      <NavLink
        className="menu__item"
        activeClassName="menu__item_active"
        to="/"
        exact
      >
        Домой
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item_active"
        to="/tips"
      >
        Советы
      </NavLink>
    </nav>
  );
}

export default NavBar;
