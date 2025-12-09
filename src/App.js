import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IngredientsList from "./pages/IngredientsManager";
import AddIngredient from "./pages/AddIngredient";
import EditIngredient from "./pages/EditIngredient";
import ViewIngredient from "./pages/ViewIngredient";

function App() {
  const [currentPage, setCurrentPage] = useState("ingredients-list");
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Khus Khus",
      description: "A versatile herb...",
      status: "Active",
      color: "#F4A460",
    },
    {
      id: 2,
      name: "Rakta Chandan",
      description: "Red Sandalwood herb...",
      status: "Active",
      color: "#DC143C",
    },
    {
      id: 3,
      name: "Swarn Bhashm",
      description: "Metallic preparation...",
      status: "Active",
      color: "#FFD700",
    },
    {
      id: 4,
      name: "Giloy",
      description: "Immunomodulator herb...",
      status: "Active",
      color: "#90EE90",
    },
    {
      id: 5,
      name: "Bhringraj",
      description: "King of Hair herb...",
      status: "Active",
      color: "#8B4513",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    description: "",
    status: "Active",
    attachment: null,
  });

  const filteredIngredients = ingredients.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (newIngredient.name.trim()) {
      const newItem = {
        id: ingredients.length + 1,
        name: newIngredient.name,
        description: newIngredient.description,
        status: newIngredient.status,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      setIngredients([...ingredients, newItem]);
      setNewIngredient({
        name: "",
        description: "",
        status: "Active",
        attachment: null,
      });
      setCurrentPage("ingredients-list");
    }
  };

  const handleFileChange = (e) => {
    setNewIngredient({ ...newIngredient, attachment: e.target.files[0] });
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-left">
          <div className="logo">AMRUTAM</div>
        </div>
        <div className="header-right">
          <span className="user-name">Name</span>
          <span className="user-dept">Department</span>
          <div className="user-avatar"></div>
        </div>
      </div>

      <div className="main-layout">
        <div className="sidebar">
          <div className="sidebar-item">
            <span className="sidebar-icon">D</span> Dashboard{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">D</span> Doctor{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">P</span> Patients{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">A</span> Appointment{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">S</span> Specialties{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item active">
            <span className="sidebar-icon">I</span> Ingredients{" "}
            <span className="arrow">›</span>
          </div>
          <div
            className="sidebar-subitem"
            onClick={() => setCurrentPage("ingredients-list")}
            style={{ cursor: "pointer" }}
          >
            <span className="sidebar-icon">L</span> Ingredients List
          </div>
          <div
            className="sidebar-subitem"
            onClick={() => setCurrentPage("add-ingredient")}
            style={{ cursor: "pointer" }}
          >
            <span className="sidebar-icon">+</span> Add ingredients
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">C</span> Coupons{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">C</span> Concerns{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">R</span> Referral{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">C</span> Customization{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">W</span> Wallet{" "}
            <span className="arrow">›</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">R</span> Refund{" "}
            <span className="arrow">›</span>
          </div>
        </div>
        <div className="main-content">
          {currentPage === "ingredients-list" && (
            <>
              <div className="page-header">
                <h1>Ingredients</h1>
              </div>
              <div className="ingredients-section">
                <div className="section-header">
                  <h2>Ingredients List</h2>
                  <div className="header-controls">
                    <input
                      type="text"
                      className="search-bar"
                      placeholder="Search here"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="add-btn"
                      onClick={() => setCurrentPage("add-ingredient")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="table-container">
                  <table className="ingredients-table">
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" />
                        </th>
                        <th>Ingredients</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredIngredients.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>
                            <div className="ingredient-name">
                              <span
                                className="color-dot"
                                style={{ backgroundColor: item.color }}
                              ></span>
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="description">{item.description}</td>
                          <td>
                            <span className="status-badge active">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pagination">
                  <button className="prev-btn">‹</button>
                  <span className="page-num">1</span>
                  <span className="page-dots">...</span>
                  <button className="next-btn">›</button>
                </div>
              </div>
            </>
          )}

          {currentPage === "add-ingredient" && (
            <>
              <div className="page-header">
                <div className="breadcrumb">
                  <span
                    onClick={() => setCurrentPage("ingredients-list")}
                    style={{ cursor: "pointer", color: "#4a90e2" }}
                  >
                    Ingredients
                  </span>
                  <span> &gt; Add Ingredients</span>
                </div>
                <h1>Add Ingredients</h1>
              </div>
              <div className="add-ingredient-form">
                <form onSubmit={handleAddIngredient}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ingredient-name">Speciality Name *</label>
                      <input
                        type="text"
                        id="ingredient-name"
                        className="form-input"
                        placeholder="Enter ingredient name"
                        value={newIngredient.name}
                        onChange={(e) =>
                          setNewIngredient({
                            ...newIngredient,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ingredient-description">
                        Specialty Description *
                      </label>
                      <textarea
                        id="ingredient-description"
                        className="form-textarea"
                        placeholder="Enter detailed description"
                        value={newIngredient.description}
                        onChange={(e) =>
                          setNewIngredient({
                            ...newIngredient,
                            description: e.target.value,
                          })
                        }
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="status"
                          value="Active"
                          checked={newIngredient.status === "Active"}
                          onChange={(e) =>
                            setNewIngredient({
                              ...newIngredient,
                              status: e.target.value,
                            })
                          }
                        />{" "}
                        Active
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="status"
                          value="Inactive"
                          checked={newIngredient.status === "Inactive"}
                          onChange={(e) =>
                            setNewIngredient({
                              ...newIngredient,
                              status: e.target.value,
                            })
                          }
                        />{" "}
                        Inactive
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="attachment"># Attachment</label>
                    <div className="file-input-wrapper">
                      <input
                        type="file"
                        id="attachment"
                        className="file-input"
                        onChange={handleFileChange}
                      />
                      <button type="button" className="select-btn">
                        Select
                      </button>
                      {newIngredient.attachment && (
                        <span className="file-name">
                          {newIngredient.attachment.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-clear"
                      onClick={() =>
                        setNewIngredient({
                          name: "",
                          description: "",
                          status: "Active",
                          attachment: null,
                        })
                      }
                    >
                      Clear
                    </button>
                    <button type="submit" className="btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
