import React from "react";
import logo from "../img/airbnb.png";

function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={logo} />
    </nav>
  );
}

export default Navbar;
