import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import logo from "/img/logo.png";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <div className="container px-xxl-5">
          <nav className="navbar navbar-expand-lg ">
            <Link to="/" className="navbar-brand ">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 hamburger_menu">
                <li className="nav-item fw-medium ms-3 my_dropdown">
                  <Link
                    className="nav-link link-dark link-opacity-75-hover"
                  >Products
                  </Link>
                  <div>
                    <ul className="row">
                      <li className="dropdown-item col">
                        <h5>Crop Protection</h5>
                        <h6>Efficient & Autonomous Operation</h6>
                        <p>AGRAS T20P</p>
                        <p>AGRAS T40</p>
                        <p>AGRAS T30</p>
                        <p>AGRAS T10</p>
                      </li>
                      <li className="dropdown-item col">
                        <h5>Mission Planning</h5>
                        <h6>Detect Every Detail</h6>

                        <p>Mavic 3M</p>
                        <p>DJI Terra</p>
                      </li>
                      <li className="dropdown-item col">
                        <h5>Smart Farm</h5>
                        <h6>Providing efficient crop protection services</h6>
                        <p>DJI SmartFarm Web</p>
                        <p>DJI SmartFarm App</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item fw-medium ms-3">
                  <Link
                    to="/newsroom"
                    className="nav-link link-dark link-opacity-75-hover"
                  >Newsroom
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3">
                  <Link
                    to="/insights"
                    className="nav-link link-dark link-opacity-75-hover"
                  >Insights
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3">
                  <Link
                    to="/academy"
                    className="nav-link link-dark link-opacity-75-hover"
                  >DJI Academy
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3">
                  <Link
                    to="/support"
                    className="nav-link link-dark link-opacity-75-hover"
                  >Support
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3">
                  <Link
                    to="/about-us"
                    className="nav-link link-dark link-opacity-75-hover"
                  >About Us
                  </Link>
                </li>

              </ul>
              <a
                href="https://ag.dji.com/contact-us"
                target="_blank"
                className="btn btn-secondary border-0  rounded-1 contact_btn "

              >Contact Us
              </a>

            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
