import React, { useState } from "react";
import "./Header.css";
import "../../assets/fonts.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import MobileMenu from "./MobileMenu";
import sound from "../../assets/sound.mp3";
import { FaMusic } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import piano from "../../assets/piano.wav";
import background from "../../assets/bacgroundvoice.mp3";

const audio = new Audio(background);
audio.load();

const Header = () => {
  const [start, setStart] = useState("white");
  const [work, setWork] = useState("white");
  const [lab, setLab] = useState("white");
  const [about, setAbout] = useState("white");
  const [contact, setContact] = useState("white");
  const [open, setOpen] = useState(false);

  const setColor1 = () => {
    setStart("#5918df");
    setWork("white");
    setLab("white");
    setAbout("white");
    setContact("white");
  };

  const setColor2 = () => {
    setWork("#5918df");
    setStart("white");
    setLab("white");
    setAbout("white");
    setContact("white");
  };

  const setColor3 = () => {
    setLab("#5918df");
    setStart("white");
    setWork("white");
    setAbout("white");
    setContact("white");
  };

  const setColor4 = () => {
    setAbout("#5918df");
    setStart("white");
    setWork("white");
    setContact("white");
    setLab("white");
  };
  const setColor5 = () => {
    setContact("#5918df");
    setStart("white");
    setWork("white");
    setLab("white");
    setAbout("white");
  };

  const sound1 = () => {
    new Audio(sound).play();
  };

  const [isMusic, isMusicSet] = React.useState(false);

  const toggleMusic = () => {
    const isMusicToggle = !isMusic;
    if (isMusicToggle) {
      audio.play();
    } else {
      audio.pause();
    }
    isMusicSet(isMusicToggle);
  };

  return (
    <>
      <div className="Header">
        <div className="logo">
          <h1 className="logo_0">
            {" "}
            <span className="logo_1">{"<"}</span>{" "}
            <span className="font">A</span>
            bhishe
            <span className="font">K</span>{" "}
            <span className="logo_1">{"/>"}</span>
          </h1>
        </div>

        <div className="header_main">
          <ol className="header_options">
            <a onClick={() => sound1()} href="#start">
              <ul style={{ color: start }} onClick={() => setColor1()}>
                Start <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a onClick={() => sound1()} href="#work">
              <ul style={{ color: work }} onClick={() => setColor2()}>
                Work <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a onClick={() => sound1()} href="#lab">
              <ul style={{ color: lab }} onClick={() => setColor3()}>
                Lab <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a onClick={() => sound1()} href="#about">
              <ul style={{ color: about }} onClick={() => setColor4()}>
                About <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a onClick={() => sound1()} href="#contact">
              <ul style={{ color: contact }} onClick={() => setColor5()}>
                Contact <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <button className="music" onClick={toggleMusic}>
              {isMusic ? (
                <FaPause size={20} color="white" />
              ) : (
                <FaMusic size={20} color="white" />
              )}
            </button>
          </ol>
        </div>
        <div className="header_menu">
          {open ? (
            <ImCross
              color="white"
              size={25}
              onClick={() => {
                setOpen(!open);
                sound1();
              }}
            />
          ) : (
            <HiMenuAlt4
              color="white"
              size={35}
              onClick={() => {
                setOpen(!open);
                sound1();
              }}
            />
          )}
        </div>
      </div>
      {open && (
        <MobileMenu
          open={open}
          sound1={sound1}
          setOpen={setOpen}
          toggleMusic={toggleMusic}
          isMusic={isMusic}
          FaPause={FaPause}
          FaMusic={FaMusic}
        />
      )}
    </>
  );
};

export default Header;
