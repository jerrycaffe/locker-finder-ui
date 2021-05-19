import React from "react";
import logoIcon from "../img/random-icon.jpg";

const index = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="logo">
          <img src={logoIcon} alt="" className="logo__icon" />
        </div>
        <ul>
          <li>
            <a href="#" className="btn-text">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="btn-text">
              Find a Locker
            </a>
          </li>
          <li>
            <a href="#" className="btn-text">
              Size Guide
            </a>
          </li>
          <li>
            <a href="#" className="btn-text">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="btn-text">
              Help Center
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="btn-text">
              My Account
            </a>
          </li>
          <li>
            <a href="#" className="btn-text">
              080-188-0872
            </a>
          </li>
          <li>
            <a href="#" className="btn-active">
              pay your bill
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
