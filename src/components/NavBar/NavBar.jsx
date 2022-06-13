/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            className="margin-logo"
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
              <NavLink to="/" className="nav-link" aria-current="page">
                Shop
              </NavLink>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/electric-guitars" className="dropdown-item">
                    Electric Guitars
                  </Link>
                </li>
                <li>
                  <Link to="/electric-basses" className="dropdown-item">
                    Electric Basses
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="margin-search">
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
          </div>
          <div className="margin-cart d-flex justify-content-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
