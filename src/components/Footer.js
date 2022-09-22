import React from "react";
import "./Footer.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-con">
      <hr></hr>

      <div className="footer">
        <a href="https://github.com/AbdallahMosa">
     
          <img className="img-social" href="url" src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/abdallah-mosa-b75b57194/">
        
          <img className="img-social" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/abdallahmmosa/">
        
          <img className="img-social" src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
