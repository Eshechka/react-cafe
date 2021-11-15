import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="deep-orange darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                React movies
              </Link>
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
