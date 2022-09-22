import React from "react";
import "./programs.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="program-categories">
        
          {programsData.map((item) => {
            return (
              <div className="category">
                {item.image}
                <span>{item.heading}</span>
                <span>{item.details}</span>
                <div className="join-now">
                  <span>join Now</span>
                  
                    <img src={RightArrow} alt="img" />
                  
                </div>
              </div>
            );
          })}
     
      </div>
    </div>
  );
};

export default Programs;
