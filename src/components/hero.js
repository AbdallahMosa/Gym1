import React from "react";
import "./hero.css";
import { Header } from "./Header";
import heart from "../assets/heart.png";
import hero_image_back from "../assets/hero_image_back.png";
import hero_image from "../assets/hero_image.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberConter from "number-counter";
export const hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "168px" : "283px " }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <sapn className="stroke-text">Shape </sapn>
            <sapn>Your</sapn>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figuers">
          <div>
            <span>
              <NumberConter
                end={140}
                start={100}
                delay="4"
                preFix="+"
              ></NumberConter>
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberConter
                end={978}
                start={100}
                delay="1"
                preFix="+"
              ></NumberConter>
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span> <NumberConter
                end={50}
                start={0}
                delay="2"
                preFix="+"
              ></NumberConter></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-button">
          <button class="btn"> Get started</button>
          <button class="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <div>
          <img src={hero_image} alt="hero_image" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "22rem" }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back"
          />
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="calories"
          >
            <img src={calories} alt="img" />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default hero;
