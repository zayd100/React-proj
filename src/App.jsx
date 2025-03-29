import React from "react";
import Cd from "./Cards/cardsdata.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Test from "./Authors/hire.jsx";
import Library from "./Library/library.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/cards" element={<Cd />} />
        <Route path="/authors" element={<Test />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </HashRouter>
  );
}

export default App;