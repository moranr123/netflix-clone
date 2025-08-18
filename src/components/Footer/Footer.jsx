import React from "react"; 
import "./Footer.css"; // Assuming you have a CSS file for Footer component 
import youtube_icon from "../../assets/youtube_icon.png"; // Assuming you have a YouTube icon image
import facebook_icon from "../../assets/facebook_icon.png"; // Assuming you have a Facebook icon image
import twitter_icon from "../../assets/twitter_icon.png"; // Assuming you have a Twitter icon image 
import instagram_icon from "../../assets/instagram_icon.png"; // Assuming you have an Instagram icon image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 2025 Netflix Clone. All rights reserved. This is a clone project and not affiliated with Netflix.
      </p>
    </footer>
  );
}
export default Footer;