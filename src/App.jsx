import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom"; // Importing Routes and Route for routing
import Login from "./pages/Login/Login"; // Importing the Login component
import Player from "./pages/Player/Player"; // Importing the Player component
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase"; // Importing the auth object from firebase.js
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for react-toastify


const App = () => {
  
  const navigate = useNavigate(); // Importing useNavigate for navigation

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is signed in:", user);
        navigate("/"); // Redirect to home if user is signed in
      } else {
        console.log("No user is signed in.");
        navigate("/login"); // Redirect to login if no user is signed in
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
      
    </div>
  );
}

export default App;