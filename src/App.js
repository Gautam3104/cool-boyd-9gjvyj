import React, { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Flour",
      category: "Dry Goods",
      quantity: 50,
      unit: "kg",
      price: 300,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Sugar",
      category: "Dry Goods",
      quantity: 30,
      unit: "kg",
      price: 200,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Oil",
      category: "Liquids",
      quantity: 20,
      unit: "L",
      price: 150,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Milk",
      category: "Dairy",
      quantity: 10,
      unit: "L",
      price: 120,
      status: "Low Stock",
    },
    {
      id: 5,
      name: "Eggs",
      category: "Dairy",
      quantity: 5,
      unit: "crate",
      price: 180,
      status: "In Stock",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Ingredients Admin Panel";
  }, []);

  const filteredIngredients = ingredients.filter((ingredient) => {
    const matchesSearch = ingredient.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || ingredient.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(ingredients.map((item) => item.category)),
  ];

  return (
    <div className="app-container">
      <header>
        <h1>🛒 Ingredients Admin Panel</h1>
        <p>Manage your ingredients inventory efficiently</p>
      </header>

      <div className="app-layout">
        <sidebar>
          <h3>Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCategory(category);
                  }}
                  style={{
                    fontWeight:
                      selectedCategory === category ? "bold" : "normal",
                    color: selectedCategory === category ? "#667eea" : "#666",
                  }}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </sidebar>

        <main>
          <div className="main-content">
            <div className="ingredients-manager">
              <h2>Ingredients Inventory</h2>
              <p className="subtitle">
                Total Items: {filteredIngredients.length}
              </p>

              <div className="search-filter-bar">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search ingredients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="add-btn">+ Add New Ingredient</button>
              </div>

              {filteredIngredients.length > 0 ? (
                <table className="ingredients-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                      <th>Price (₹)</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredIngredients.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>₹{item.price}</td>
                        <td>
                          <span
                            className={`status-badge ${item.status
                              .replace(" ", "-")
                              .toLowerCase()}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="empty-state">
                  <h3>No ingredients found</h3>
                  <p>Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
