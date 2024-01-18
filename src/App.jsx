// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Content from "./Components/Content.jsx";
import Faq from "./Components/Faq.jsx";

function App() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Header />
      <Content />
      <Faq />
    </div>
  );
}

export default App;
