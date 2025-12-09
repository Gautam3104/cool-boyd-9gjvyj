import React from "react";

const ViewIngredient = ({ ingredient, onEdit, onCancel }) => {
  if (!ingredient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="page-header">
        <div className="breadcrumb">
          <span onClick={onCancel} style={{ cursor: "pointer" }}>
            Ingredients
          </span>
          <span className="separator">&nbsp;&gt;&nbsp;</span>
          <span>{ingredient.name}</span>
        </div>
      </div>
      <div className="view-ingredient">
        <div className="view-header">
          <h1>{ingredient.name}</h1>
          <button className="btn-primary" onClick={onEdit}>
            Edit
          </button>
        </div>
        <div className="view-details">
          <div className="detail-row">
            <label>Ingredient Name:</label>
            <span>{ingredient.name}</span>
          </div>
          <div className="detail-row">
            <label>Description:</label>
            <span>{ingredient.description}</span>
          </div>
          <div className="detail-row">
            <label>Status:</label>
            <span className={`status-badge ${ingredient.status.toLowerCase()}`}>
              {ingredient.status}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewIngredient;
