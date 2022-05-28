/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

export default function NavBar() {
  const logoStyles = {
    marginTop: -3,
    marginLeft: 5,
    marginRight: 25,
  };
  const itemStyles = {
    fontSize: 18,
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={logoStyles}>
          <img
            src={logo}
            className="mx-3"
            alt="Music Fever"
            width="80"
            height="62"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink
                to="/home"
                className="nav-link"
                style={itemStyles}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/about-us" className="nav-link" style={itemStyles}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                style={itemStyles}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Instruments
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/" className="dropdown-item">
                    Electric Guitars
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Electric Basses
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Keyboards
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Drums
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/contact-us" className="nav-link" style={itemStyles}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex mx-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex justify-content-center mx-3">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
