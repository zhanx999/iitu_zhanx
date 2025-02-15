import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">
          <div className="logo">
            <img src="IITU_White_Logo.png" alt="IITU Logo" />
          </div>
          <h1 className="title">IITU University</h1>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#course-info">Course Info</a>
          <a href="#enrollment">Enrollment</a>
          <a href="#faculty">Faculty</a>
          <a href="#footer">Contact</a>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
