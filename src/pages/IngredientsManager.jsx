import React from "react";
import "./../styles/App.css";

const IngredientsManager = ({
  ingredients,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) => {
  const filtered = ingredients.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-shell">
      <div className="page-breadcrumb">
        <span>Ingredient</span>
        <span className="breadcrumb-separator">›</span>
        <span>Ingredients List</span>
      </div>

      <h1 className="page-title">Ingredients</h1>

      <section className="card">
        <div className="card-header">
          <h2 className="card-title">Ingredients List</h2>

          <div className="card-header-actions">
            <input
              type="text"
              className="input-search"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn-circle-green"
              onClick={() => setCurrentPage("add-ingredient")}
            >
              +
            </button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>INGREDIENTS</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="tbl-ingredient-name">
                      <span
                        className="tbl-color-dot"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="tbl-description">{item.description}</td>
                  <td>
                    <span className="status-pill status-pill-active">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="pagination-nav">‹</button>
          <span className="pagination-page">1</span>
          <span className="pagination-dots">…</span>
          <button className="pagination-nav">›</button>
        </div>
      </section>
    </div>
  );
};

export default IngredientsManager;
