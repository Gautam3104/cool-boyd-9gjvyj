import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import IngredientsManager from './pages/IngredientsManager';

function App() {
  useEffect(() => {
    document.title = 'Ingredients Admin Panel - Manage Your Kitchen Inventory';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Professional ingredients management system for restaurant and kitchen inventory management');
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <IngredientsManager />
        </main>
      </div>
    </div>
  );
}

export default App;