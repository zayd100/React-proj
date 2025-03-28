import React from "react";
import Cd from "./cardsdata";
import Navbar from "./navbar";

import Test from "./hire/";

import Library from "./library";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
      return(
        <Router>
          <Navbar />
          <Routes>

        <Route path = "/cardsdata" element = {<Cd />}/>
  
        <Route path = "/test" element={<Test/>}/>
        <Route path ="/library" element = {<Library />}/>
        

          </Routes>

        </Router>
      );

}
export default App