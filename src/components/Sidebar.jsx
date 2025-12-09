import React from "react";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "doctor", label: "Doctor", icon: "👨‍⚕️" },
    { id: "patients", label: "Patients", icon: "👥" },
    { id: "appointment", label: "Appointment", icon: "📅" },
    { id: "specialties", label: "Specialties", icon: "🏷️" },
    { id: "ingredients", label: "Ingredients", icon: "🧪" },
    { id: "ingredients-list", label: "Ingredients List", icon: "📋" },
    { id: "add-ingredient", label: "Add ingredients", icon: "➕" },
    { id: "coupons", label: "Coupons", icon: "🎟️" },
    { id: "concerns", label: "Concerns", icon: "⚠️" },
    { id: "referral", label: "Referral", icon: "🔗" },
    { id: "customization", label: "Customization", icon: "⚙️" },
    { id: "wallet", label: "Wallet", icon: "💰" },
    { id: "refund", label: "Refund", icon: "💵" },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="sidebar-item"
          onClick={() => setCurrentPage(item.id)}
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
          <span className="sidebar-arrow">›</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
