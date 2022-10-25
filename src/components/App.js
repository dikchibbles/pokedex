import React from "react";
import Header from "./Header";
import Pokedex from "./Pokedex";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
