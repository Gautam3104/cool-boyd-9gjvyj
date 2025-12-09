import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-list">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">🏠</span>
              <span className="sidebar-label">D</span>
              <span className="sidebar-text">Dashboard</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">👨‍⚕️</span>
              <span className="sidebar-label">D</span>
              <span className="sidebar-text">Doctor</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">👥</span>
              <span className="sidebar-label">P</span>
              <span className="sidebar-text">Patients</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">📅</span>
              <span className="sidebar-label">A</span>
              <span className="sidebar-text">Appointment</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">🏷️</span>
              <span className="sidebar-label">S</span>
              <span className="sidebar-text">Specialties</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">🧪</span>
              <span className="sidebar-label">I</span>
              <span className="sidebar-text">Ingredients</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="sidebar-menu">
        <ul className="menu-list">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">📋</span>
              <span className="sidebar-label">L</span>
              <span className="sidebar-text">Ingredients List</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">➕</span>
              <span className="sidebar-label">+</span>
              <span className="sidebar-text">Add ingredients</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="sidebar-menu">
        <ul className="menu-list">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">🎟️</span>
              <span className="sidebar-label">C</span>
              <span className="sidebar-text">Coupons</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">⚠️</span>
              <span className="sidebar-label">C</span>
              <span className="sidebar-text">Concerns</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">🔗</span>
              <span className="sidebar-label">R</span>
              <span className="sidebar-text">Referral</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">⚙️</span>
              <span className="sidebar-label">C</span>
              <span className="sidebar-text">Customization</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">💳</span>
              <span className="sidebar-label">W</span>
              <span className="sidebar-text">Wallet</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">💰</span>
              <span className="sidebar-label">R</span>
              <span className="sidebar-text">Refund</span>
              <span className="sidebar-arrow">›</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
