import React from "react";
import "./CSS/Navbar.css";
const Navbar = ({ size, setShow }) => {
  return (
    <div className="navbar_container">
      <h1>Navbar</h1>
      <nav className="navbar_shopping">
        <h1
          onClick={() => {
            setShow(true);
          }}
        >
          Shopping Mart
        </h1>
        <ul>
          <li
            onClick={() => {
              setShow(false);
            }}
          >
            🛒<span>{size}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
