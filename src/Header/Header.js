import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <h3>Fast Riders</h3>
            </div>
          <div class="nav-link container-fluid justify-content-end">
            <Link to="/home"><h5>Home</h5></Link>
            <h5>Destination</h5>
            <h5>Blog</h5>
            <button className="btn btn-warning">Login</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
