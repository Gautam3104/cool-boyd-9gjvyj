import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-list">
          <li><a href="#ingredients" className="menu-link active">📦 Ingredients</a></li>
          <li><a href="#dashboard" className="menu-link">📊 Dashboard</a></li>
          <li><a href="#reports" className="menu-link">📈 Reports</a></li>
          <li><a href="#settings" className="menu-link">⚙️ Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;