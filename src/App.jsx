import React from "react";
import Cd from "./Cards/cardsdata.jsx";
import Navbar from "./Navbar/navbar.jsx";

import Test from "./Authors/hire.jsx";

import Library from "./Library/library.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
      return(
        <Router>
          <Navbar />
          <Routes>

        <Route path = "/Cards/cardsdata" element = {<Cd />}/>
  
        <Route path = "/Authors/hire" element={<Test/>}/>
        <Route path ="/Library/library" element = {<Library />}/>
        

          </Routes>

        </Router>
      );

}
export default App