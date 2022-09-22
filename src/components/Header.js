import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo1" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            borderRadius: "0.5rem",
            padding: "5px",
          }}
          onClick={() => {
            setMenuOpened(true);
          }}
        >
          <img
            style={{ width: "1.5rem", height: "1.5rem" }}
            src={Bars}
            alt=""
          />{" "}
        </div>
      ) : (
        <ui className="header-menu">
          <li>
            {" "}
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="programs"
              span={true}
              smooth={true}
            >
              programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="reasons"
              span={true}
              smooth={true}
            >
              {" "}
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ui>
      )}
    </div>
  );
};
