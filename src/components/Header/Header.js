import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <h3>Fast Riders</h3>
            </div>
          <div class="nav-link container-fluid justify-content-end">
            <Link to="/home"><h5>Home</h5></Link>
            <Link to="/destination"><h5>Destination</h5></Link>
            <h5>Blog</h5>
            <h5>Contact</h5>
            <button onClick={() => setLoggedInUser({})} className="btn btn-warning">
            <Link to="/login">{loggedInUser.email ? loggedInUser.name || loggedInUser.email : "Login"}</Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
