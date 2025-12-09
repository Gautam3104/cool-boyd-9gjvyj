import React, { useState } from "react";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Flour",
      category: "Dry Goods",
      quantity: 50,
      unit: "kg",
      price: 300,
      status: "in_stock",
    },
    {
      id: 2,
      name: "Sugar",
      category: "Dry Goods",
      quantity: 30,
      unit: "kg",
      price: 200,
      status: "in_stock",
    },
    {
      id: 3,
      name: "Oil",
      category: "Liquids",
      quantity: 20,
      unit: "L",
      price: 150,
      status: "low_stock",
    },
    {
      id: 4,
      name: "Milk",
      category: "Dairy",
      quantity: 10,
      unit: "L",
      price: 120,
      status: "low_stock",
    },
    {
      id: 5,
      name: "Eggs",
      category: "Dairy",
      quantity: 5,
      unit: "crate",
      price: 180,
      status: "in_stock",
    },
  ]);

  const pages = {
    dashboard: { title: "Dashboard", label: "Dashboard" },
    list: { title: "Ingredients List", label: "List" },
    add: { title: "Add Ingredient", label: "Add New" },
    edit: { title: "Edit Ingredient", label: "Edit" },
    view: { title: "View Ingredient", label: "View" },
    categories: { title: "Manage Categories", label: "Categories" },
    inventory: { title: "Inventory Management", label: "Inventory" },
    reports: { title: "Analytics & Reports", label: "Reports" },
    history: { title: "Change History", label: "History" },
    bulk: { title: "Bulk Actions", label: "Bulk" },
    settings: { title: "Settings", label: "Settings" },
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage ingredients={ingredients} />;
      case "list":
        return <ListPage ingredients={ingredients} />;
      case "add":
        return <AddPage setCurrentPage={setCurrentPage} />;
      case "edit":
        return <EditPage setCurrentPage={setCurrentPage} />;
      case "view":
        return <ViewPage setCurrentPage={setCurrentPage} />;
      case "categories":
        return <CategoriesPage />;
      case "inventory":
        return <InventoryPage ingredients={ingredients} />;
      case "reports":
        return <ReportsPage ingredients={ingredients} />;
      case "history":
        return <HistoryPage />;
      case "bulk":
        return <BulkPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage ingredients={ingredients} />;
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin - Ingredients</h1>
        <p>Manage your ingredient inventory efficiently</p>
      </header>

      <div className="admin-layout">
        <nav className="admin-nav">
          <div className="nav-title">Pages</div>
          <ul className="nav-list">
            {Object.entries(pages).map(([key, page]) => (
              <li key={key}>
                <button
                  className={`nav-btn ${currentPage === key ? "active" : ""}`}
                  onClick={() => setCurrentPage(key)}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="admin-main">
          <div className="page-header">
            <h2>{pages[currentPage].title}</h2>
          </div>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

// Page Components
function DashboardPage({ ingredients }) {
  return (
    <div className="page-content">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Items</h3>
          <p>{ingredients.length}</p>
        </div>
        <div className="stat-card">
          <h3>In Stock</h3>
          <p>{ingredients.filter((i) => i.status === "in_stock").length}</p>
        </div>
        <div className="stat-card">
          <h3>Low Stock</h3>
          <p>{ingredients.filter((i) => i.status === "low_stock").length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Value</h3>
          <p>
            ₹{ingredients.reduce((sum, i) => sum + i.price * i.quantity, 0)}
          </p>
        </div>
      </div>
      <div className="recent-items">
        <h3>Recent Items</h3>
        <ul>
          {ingredients.map((i) => (
            <li key={i.id}>
              {i.name} - {i.quantity}
              {i.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ListPage({ ingredients }) {
  return (
    <div className="page-content">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.category}</td>
              <td>{i.quantity}</td>
              <td>{i.unit}</td>
              <td>₹{i.price}</td>
              <td>
                <span className={`status ${i.status}`}>
                  {i.status.replace("_", " ")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AddPage({ setCurrentPage }) {
  return (
    <div className="page-content">
      <h3>Add New Ingredient Form</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Quantity" />
        <button>Save</button>
      </form>
    </div>
  );
}

function EditPage({ setCurrentPage }) {
  return (
    <div className="page-content">
      <h3>Edit Ingredient Form</h3>
      <form>
        <input type="text" placeholder="Name" defaultValue="Flour" />
        <input type="text" placeholder="Category" defaultValue="Dry Goods" />
        <input type="number" placeholder="Quantity" defaultValue="50" />
        <button>Update</button>
      </form>
    </div>
  );
}

function ViewPage({ setCurrentPage }) {
  return (
    <div className="page-content">
      <h3>Ingredient Details</h3>
      <div className="detail-view">
        <p>
          <strong>Name:</strong> Flour
        </p>
        <p>
          <strong>Category:</strong> Dry Goods
        </p>
        <p>
          <strong>Quantity:</strong> 50 kg
        </p>
        <p>
          <strong>Price:</strong> ₹300
        </p>
        <p>
          <strong>Status:</strong> In Stock
        </p>
      </div>
    </div>
  );
}

function CategoriesPage() {
  return (
    <div className="page-content">
      <h3>Manage Categories</h3>
      <ul>
        <li>Dry Goods</li>
        <li>Liquids</li>
        <li>Dairy</li>
        <li>Spices</li>
      </ul>
    </div>
  );
}

function InventoryPage({ ingredients }) {
  return (
    <div className="page-content">
      <h3>Stock Levels</h3>
      <div className="inventory-list">
        {ingredients.map((i) => (
          <div key={i.id} className="inventory-item">
            <span>{i.name}</span>
            <div
              className="progress-bar"
              style={{ width: `${(i.quantity / 100) * 100}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsPage({ ingredients }) {
  return (
    <div className="page-content">
      <h3>Analytics</h3>
      <p>
        Total Inventory Value: ₹
        {ingredients.reduce((s, i) => s + i.price * i.quantity, 0)}
      </p>
      <p>
        Average Price: ₹
        {(
          ingredients.reduce((s, i) => s + i.price, 0) / ingredients.length
        ).toFixed(2)}
      </p>
    </div>
  );
}

function HistoryPage() {
  return (
    <div className="page-content">
      <h3>Change History</h3>
      <ul>
        <li>Flour - Updated 2 hours ago</li>
        <li>Sugar - Added 1 day ago</li>
        <li>Oil - Quantity changed 3 days ago</li>
      </ul>
    </div>
  );
}

function BulkPage() {
  return (
    <div className="page-content">
      <h3>Bulk Operations</h3>
      <button className="action-btn">Import from CSV</button>
      <button className="action-btn">Export Data</button>
      <button className="action-btn">Update All Prices</button>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="page-content">
      <h3>Admin Settings</h3>
      <div className="settings-form">
        <label>
          <input type="checkbox" defaultChecked /> Enable Notifications
        </label>
        <label>
          <input type="checkbox" defaultChecked /> Auto Backup
        </label>
        <label>
          Default Currency:{" "}
          <select>
            <option>INR</option>
            <option>USD</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default App;
