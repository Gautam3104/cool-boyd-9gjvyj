import React from "react";
import "../styles/App.css";

const Header = () => {
  return (
    <header className="top-header">
      <div className="header-left-block">
        <button className="header-back-btn">‹</button>
        <div className="header-logo">
          <div className="header-logo-mark">AMRUTAM</div>
        </div>
      </div>

      <div className="header-user-card">
        <div className="header-user-info">
          <div className="header-user-name">Name</div>
          <div className="header-user-role">Department</div>
        </div>
        <div className="header-user-avatar">
          <img
            src="https://images.pexels.com/photos/6127334/pexels-photo-6127334.jpeg?auto=compress&cs=tinysrgb&w=80"
            alt="Admin"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
