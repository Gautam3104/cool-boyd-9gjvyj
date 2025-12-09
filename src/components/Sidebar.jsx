import React from "react";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: "🏠", letter: "D" },
    { label: "Doctor", icon: "👨‍⚕️", letter: "D" },
    { label: "Patients", icon: "👥", letter: "P" },
    { label: "Appointment", icon: "📅", letter: "A" },
    { label: "Specialties", icon: "🏷️", letter: "S" },
    { label: "Ingredients", icon: "🧪", letter: "I" },
  ];

  const otherItems = [
    { label: "Coupons", icon: "🎟️", letter: "C" },
    { label: "Concerns", icon: "⚠️", letter: "C" },
    { label: "Referral", icon: "🔗", letter: "R" },
    { label: "Customization", icon: "⚙️", letter: "C" },
    { label: "Wallet", icon: "💳", letter: "W" },
    { label: "Refund", icon: "💰", letter: "R" },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li key={idx} className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon" style={{ fontSize: "18px" }}>
                  {item.icon}
                </span>
                <span className="sidebar-label">{item.letter}</span>
                <span className="sidebar-text">{item.label}</span>
                <span className="sidebar-arrow">›</span>
              </a>
            </li>
          ))}
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon" style={{ fontSize: "16px" }}>
                📋
              </span>
              <span className="sidebar-label">L</span>
              <span className="sidebar-text">Ingredients List</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">+</span>
              <span className="sidebar-text">Add ingredients</span>
            </a>
          </li>
        </ul>
        <ul className="menu-list other-items">
          {otherItems.map((item, idx) => (
            <li key={idx} className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon" style={{ fontSize: "18px" }}>
                  {item.icon}
                </span>
                <span className="sidebar-label">{item.letter}</span>
                <span className="sidebar-text">{item.label}</span>
                <span className="sidebar-arrow">›</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
