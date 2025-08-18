import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom"; // Importing Routes and Route for routing
import Login from "./pages/Login/Login"; // Importing the Login component


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;