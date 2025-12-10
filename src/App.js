import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IngredientsManager from "./pages/IngredientsManager";
import AddIngredient from "./pages/AddIngredient";
import ViewIngredient from "./pages/ViewIngredient";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("ingredients-list");

  // List page data (short info)
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Khus Khus",
      description:
        "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming,...",
      status: "Active",
      icon:
        "https://images.pexels.com/photos/4198378/pexels-photo-4198378.jpeg?auto=compress&cs=tinysrgb&w=80",
    },
    {
      id: 2,
      name: "Rakta Chandan",
      description:
        "Also known as Red Sandalwood, this herb is prized for its skin-enhancing properties. It...",
      status: "Active",
      icon:
        "https://images.pexels.com/photos/7699732/pexels-photo-7699732.jpeg?auto=compress&cs=tinysrgb&w=80",
    },
    {
      id: 3,
      name: "Swarn Bhashm",
      description:
        "A metallic preparation in Ayurveda, believed to enhance stamina, strength, and overall...",
      status: "Active",
      icon:
        "https://images.pexels.com/photos/4198368/pexels-photo-4198368.jpeg?auto=compress&cs=tinysrgb&w=80",
    },
    {
      id: 4,
      name: "Giloy",
      description:
        "A powerful immunomodulator that boosts overall immunity. It also aids in digestion a...",
      status: "Active",
      icon:
        "https://images.pexels.com/photos/4198379/pexels-photo-4198379.jpeg?auto=compress&cs=tinysrgb&w=80",
    },
    {
      id: 5,
      name: "Bhringraj",
      description:
        "Known as the 'King of Hair', this herb is renowned for preventing hair loss and treating...",
      status: "Active",
      icon:
        "https://images.pexels.com/photos/2518892/pexels-photo-2518892.jpeg?auto=compress&cs=tinysrgb&w=80",
    },
  ]);

  // Search text for list
  const [searchTerm, setSearchTerm] = useState("");

  // Full selected ingredient for Overview / Detail screens
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  // When user clicks an ingredient name from list
  const handleOpenIngredientFromList = (ingredient) => {
    // For now we show the static Chitrak detail,
    // but still store the clicked ingredient name.
    setSelectedIngredient({
      source: "list",
      listItem: ingredient,
    });
    setCurrentPage("ingredient-detail");
  };

  // When user completes Add Ingredient flow (Overview > Submit)
  const handleCreateIngredient = (fullForm) => {
    const shortName =
      fullForm.general.ingredientName || "New Ingredient";

    // add to list
    setIngredients((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: shortName,
        description:
          fullForm.general.description ||
          "Newly added ingredient description...",
        status: "Active",
        icon: fullForm.general.imagePreview || null,
      },
    ]);

    // store full details for Overview/Detail
    setSelectedIngredient({
      source: "form",
      fullForm,
    });

    setCurrentPage("ingredient-detail");
  };

  const goToList = () => setCurrentPage("ingredients-list");

  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="app-main">
          {currentPage === "ingredients-list" && (
            <IngredientsManager
              ingredients={ingredients}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setCurrentPage={setCurrentPage}
              onOpenIngredient={handleOpenIngredientFromList}
            />
          )}

          {currentPage === "add-ingredient" && (
            <AddIngredient
              setCurrentPage={setCurrentPage}
              onSubmitIngredient={handleCreateIngredient}
            />
          )}

          {currentPage === "ingredient-detail" && (
            <ViewIngredient
              ingredient={selectedIngredient}
              onBack={goToList}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
