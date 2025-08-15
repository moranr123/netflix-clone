import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for Navbar component
import logo from "../../assets/logo.png"; // Adjust the path to your logo image
import search_icon from "../../assets/search_icon.svg"; // Adjust the path to your search icon image
import bell_icon from "../../assets/bell_icon.svg"; // Adjust the path to your bell icon image
import profile_img from "../../assets/profile_img.png"; // Adjust the path to your profile icon image
import caret_icon from "../../assets/caret_icon.svg"; // Adjust the path to your caret icon image

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className="icons"/>
            <p>Children</p>
            <img src={bell_icon} alt="" className="icons" />
            <div className="navbar-profile">
                <img src={profile_img} alt="" className="profile" />
                <img src={caret_icon} alt="" className="icons" />
                <div className="dropdown">
                    <p>Sign Out of Netflix</p>
                </div>
            </div>
         </div>
    </div>
  );
}

export default Navbar;