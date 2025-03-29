import React from "react";
import Cd from "./Cards/cardsdata.jsx";
import Navbar from "./Navbar/navbar.jsx";

import Test from "./Authors/hire.jsx";

import Library from "./Library/library.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
      return(
        <Router basename="/React-proj">
          <Navbar />
          <Routes>
          <Route path="/" element={<Library />} />
        <Route path = "/cards" element = {<Cd />}/>
  
        <Route path = "/authors" element={<Test/>}/>
        <Route path ="/library" element = {<Library />}/>
        

          </Routes>

        </Router>
      );

}
export default App