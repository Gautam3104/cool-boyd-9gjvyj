import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-section">
          <h1 className="logo">🍳 Admin Panel</h1>
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-item">Home</a>
          <a href="#ingredients" className="nav-item">Ingredients</a>
          <a href="#reports" className="nav-item">Reports</a>
          <a href="#settings" className="nav-item">Settings</a>
        </nav>
        <div className="user-profile">
          <span className="username">Admin User</span>
          <img src="https://via.placeholder.com/45" alt="user-avatar" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;