import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../constants/work_inside_data";
import "./WorkInside.css";
import sound from "../../assets/sound.mp3";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";

const WorkInside = () => {
  const { id } = useParams();

  function convertToId(text) {
    return text
      .toLowerCase()
      .replace(/  /g, "-")
      .replace(/[^\w-]+/g, " ");
  }
  const p = data.find((product) => convertToId(product.link) === id);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const sound1 = () => {
    new Audio(sound).play();
  };

  return (
    <div className="work_inside">
      <div className="work_inside_image">
        <img src={p.img1} alt="img" />
        <img src={p.img2} alt="img" />
        <img src={p.img3} alt="img" />
        <img src={p.img4} alt="img" />
        <img src={p.img5} alt="img" />
        <img src={p.img6} alt="img" />
      </div>

      <div className="work_inside_side_box">
        <div className="work_inside_icons">
          <Link to={p.prev}>
            <div
              className="work_inside_left_icon"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => sound1()}
            >
              <HiArrowLongLeft />
              {isHovering && (
                <div className="work_inside_hover_text">
                  <h2>Go back home</h2>
                </div>
              )}
            </div>
          </Link>
          <div className="work_inside_right_icon">
            <HiArrowLongLeft className="work_inside_right_icon_1" />

            <p>/</p>
            <HiArrowLongRight className="work_inside_right_icon_2" />
          </div>
        </div>
        <div className="work_inside_tags">
          <span>{p.stack}</span>
        </div>
        <div className="work_inside_details">
          <h1>{p.title}</h1>
          <p>{p.desc}</p>

          <div className="work_inside_btn_div">
            <div className="btn work_inside_btn">
              <a href={p.website} target="_blank">
                <button>VISIT</button>
              </a>
            </div>
            <div className="btn work_inside_btn work_inside_btn_color">
              <a href={p.code} target="_blank">
                <button>CODE</button>
              </a>
            </div>
          </div>

          <div className="work_inside_lines">
            <div className="work_inside_hl" />
            <span> {p.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInside;
