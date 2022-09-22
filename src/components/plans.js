import React from "react";
import "./plans.css";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-continer" id="plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="programs-hader">
        <span className="stroke-text">READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className="stroke-text"> NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((iltem, i) => {
          return (
            <div className="plan" key={i}>
              {iltem.icon}
              <span>{iltem.name}</span>
              <span>$ {iltem.price}</span>
              <div className="features">
                
                {iltem.features.map((element, i) => {
                  return (
                    <div className="feature">
                      <img src={whiteTick} alt="" />
                      <span key={i}>{element}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <span>see more -></span>
              </div>
          
                <button className="btn">Join ow</button>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
