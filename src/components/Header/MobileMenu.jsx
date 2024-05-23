import React from "react";
import "./Header.css";
import Fade from "react-reveal/Fade";
import { ImCross } from "react-icons/im";
import Roll from "react-reveal/Roll";

const MobileMenu = ({
  open,
  sound1,
  setOpen,
  toggleMusic,
  isMusic,
  FaPause,
  FaMusic,
}) => {
  return (
    <Fade top>
      <div className="mobileMenu">
        <Fade bottom>
          <ImCross
            className="mobilemenu_cross"
            color="white"
            size={25}
            onClick={() => {
              setOpen(!open);
              sound1();
            }}
          />
        </Fade>
        <button className="music" onClick={toggleMusic}>
          {isMusic ? (
            <FaPause size={30} color="white" />
          ) : (
            <FaMusic size={30} color="white" />
          )}
        </button>
        <Roll top>
          <a href="#start" onClick={() => sound1()}>
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
              Start <span className="header_options_01">{"/>"}</span>
            </ul>
          </a>
        </Roll>
        <Roll left>
          <a href="#work" onClick={() => sound1()}>
            {" "}
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
              Work <span className="header_options_01">{"/>"}</span>
            </ul>
          </a>
        </Roll>
        <Roll bottom>
          <a href="#lab" onClick={() => sound1()}>
            {" "}
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
              Lab <span className="header_options_01">{"/>"}</span>
            </ul>
          </a>
        </Roll>
        <Roll right>
          <a href="#about" onClick={() => sound1()}>
            {" "}
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
              About <span className="header_options_01">{"/>"}</span>
            </ul>
          </a>
        </Roll>

        <Roll left>
          <a href="#contact" onClick={() => sound1()}>
            {" "}
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
              Contact <span className="header_options_01">{"/>"}</span>
            </ul>
          </a>
        </Roll>
      </div>
    </Fade>
  );
};

export default MobileMenu;
