import React from "react";
import logo from "../../static/img/favicon.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <a href="!#">
          <img src={logo} alt="Logo" className="nav__icon" />
        </a>
      </div>
      <div className="nav__right">
        <form>
          <input type="text" placeholder="Search" />
          <button type="button">
            <i className="fas fa-search" />
          </button>
        </form>
        <ul className="nav__list">
          <li className="nav__list--item">
            <a href="!#">
              <i className="far fa-user-circle" />
            </a>
          </li>
          <li className="nav__list--item">
            <a href="!#">
              <i className="far fa-question-circle" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
