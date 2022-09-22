import React from "react";
import "./Reasons.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nb from "../assets/nb.png"
import adidas from "../assets/adidas.png"
import nike from "../assets/nike.png"
const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="img" />
        <img src={image2} alt="img" />
        <img src={image3} alt="img" />
        <img src={image4} alt="img" />
      </div>
      <div className="right-r">
        <span> SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY</span>
          <span> CHOOSE US?</span>
        </div>
        <div className="details">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span id="our-partners">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
