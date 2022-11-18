import React from "react";
import "./App.css";
import Header from "./Header";
import Diary from "./Diary";
import Tips from "./Tips";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Diary />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
