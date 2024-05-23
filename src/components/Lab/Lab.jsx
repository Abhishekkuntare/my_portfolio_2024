import { useState, useEffect } from "react";
import { Container, Ul } from "./StyleAnimation";
import { fakeData } from "../../constants/lab_data";
import { otherData } from "../../constants/lab_data";
import "./Lab.css";
import * as React from "react";
import Fade from "react-reveal/Fade";

const Lab = () => {
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="lab" id="lab">
      <div className="lab_vl_box">
        <div className="lab_vl" />
        <div className="lab_vl" />
        <div className="lab_vl" />
      </div>

      <div className="lab_flex">
        <Container>
          <Fade bottom>
            <h1 className="lab_h1">
              <div className="lab_circle" />
              Lab {"/>"}
            </h1>
            <p className="lab_p">
              Check out my other projects like, open source projects, animations
              web apps, Mobile Apps, archived stuff and more.
            </p>
          </Fade>
          <Fade bottom>
            <h1 className="lab_title lab_title_codi">Coding Platform</h1>
            <Ul>
              {fakeData.map((elem, i) => (
                <a target="_blank" href={elem.link} key={i}>
                  <li key={i}>
                    <span>{elem.name}</span>
                    <div className="img-cont">
                      <img src={elem.img} alt={elem.name} />
                    </div>
                  </li>
                </a>
              ))}
            </Ul>
          </Fade>

          <div
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            className="cursor"
          ></div>
        </Container>
        <Container>
          <Fade bottom>
            <h1 className="lab_title">Random</h1>
            <Ul>
              {otherData.map((elem, i) => (
                <a target="_blank" href={elem.link} key={elem.name}>
                  <li key={i}>
                    <span>{elem.name}</span>
                    <div className="img-cont">
                      <img src={elem.img} alt={elem.name} />
                    </div>
                  </li>
                </a>
              ))}
            </Ul>
          </Fade>

          <div
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            className="cursor"
          ></div>
        </Container>
      </div>
    </div>
  );
};

export default Lab;
