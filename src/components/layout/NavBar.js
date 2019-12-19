import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <span className="navbar-brand">
      Ahorcado
    </span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
);

export default NavBar;
