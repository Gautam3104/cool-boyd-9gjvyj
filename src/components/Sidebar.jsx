import React from "react";
import {
  MdDashboard,
  MdPerson,
  MdPeople,
  MdEventNote,
  MdTag,
  MdScience,
  MdList,
  MdAdd,
  MdLocalOffer,
  MdWarning,
  MdShare,
  MdVpnKey,
  MdAccountBalanceWallet,
  MdMonetizationOn,
} from "react-icons/md";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: MdDashboard },
    { id: "doctor", label: "Doctor", icon: MdPerson },
    { id: "patients", label: "Patients", icon: MdPeople },
    { id: "appointment", label: "Appointment", icon: MdEventNote },
    { id: "specialties", label: "Specialties", icon: MdTag },
    { id: "ingredients", label: "Ingredients", icon: MdScience },
    { id: "ingredients-list", label: "Ingredients List", icon: MdList },
    { id: "add-ingredient", label: "Add ingredients", icon: MdAdd },
    { id: "coupons", label: "Coupons", icon: MdLocalOffer },
    { id: "concerns", label: "Concerns", icon: MdWarning },
    { id: "referral", label: "Referral", icon: MdShare },
    { id: "customization", label: "Customization", icon: MdVpnKey },
    { id: "wallet", label: "Wallet", icon: MdAccountBalanceWallet },
    { id: "refund", label: "Refund", icon: MdMonetizationOn },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="sidebar-item"
            onClick={() => setCurrentPage(item.id)}
          >
            <Icon className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
            <span className="sidebar-arrow">›</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
