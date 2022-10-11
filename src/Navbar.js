import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
// import Home from "./Home";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="book-app">Classic Books</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/books">Books</NavLink>
    </nav>
  );
}

export default NavBar;
