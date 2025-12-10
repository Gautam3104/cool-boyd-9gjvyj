import React from "react";
import "../styles/App.css";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const mainMenu = [
    "Dashboard",
    "Doctor",
    "Patients",
    "Appointment",
    "Specialties",
  ];

  const bottomMenu = [
    "Coupons",
    "Concerns",
    "Referral",
    "Customizations",
    "Wallet",
    "Refund",
  ];

  return (
    <aside className="sidebar-shell">
      <div className="sidebar-menu-block">
        <div className="sidebar-menu-title">Menu</div>

        {mainMenu.map((item) => (
          <div key={item} className="sidebar-row">
            <span className="sidebar-icon-dot" />
            <span className="sidebar-text">{item}</span>
            <span className="sidebar-chevron">›</span>
          </div>
        ))}

        {/* Ingredients main item */}
        <div className="sidebar-row sidebar-row-active">
          <span className="sidebar-icon-dot" />
          <span className="sidebar-text">Ingredients</span>
          <span className="sidebar-chevron">›</span>
        </div>

        {/* Sub items */}
        <div
          className={`sidebar-sub-row ${
            currentPage === "ingredients-list" ? "sidebar-sub-row-active" : ""
          }`}
          onClick={() => setCurrentPage("ingredients-list")}
        >
          <span className="sidebar-sub-dot" />
          <span className="sidebar-sub-text">Ingredients List</span>
        </div>

        <div
          className={`sidebar-sub-row ${
            currentPage === "add-ingredient" ? "sidebar-sub-row-active" : ""
          }`}
          onClick={() => setCurrentPage("add-ingredient")}
        >
          <span className="sidebar-sub-dot" />
          <span className="sidebar-sub-text">Add Ingredients</span>
        </div>

        {bottomMenu.map((item) => (
          <div key={item} className="sidebar-row">
            <span className="sidebar-icon-dot" />
            <span className="sidebar-text">{item}</span>
            <span className="sidebar-chevron">›</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
