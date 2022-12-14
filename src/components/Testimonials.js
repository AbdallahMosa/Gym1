import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../data/testimonialsData";
import rightArrow from "../assets/rightArrow.png";
import leftArrow from "../assets/leftArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            style={{ color: "var(--orange)" }}
          >
            {testimonialsData[selected].name}
          </motion.span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 3 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 3 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="img"
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="arrow"
          />
          <img
            onClick={() => {
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
