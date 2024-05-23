import React from "react";
import Tilt from "react-tilt";
import "./Work.css";
import projects from "../../constants/index";
import mobile from "../../constants/mobile";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const ProjectCard = ({ img, id, name, link }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="project_card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          transition: true,
        }}
      >
        {/* <Fade bottom cascade> */}
        <div data-aos="flip-up" data-aos-easing="linear">
          <Link to={`/works/${link}`}>
            <div className="project_card_data">
              <h3 className="project_card_name">{name}</h3>
              <div className="project_card_border" />
              <h1 style={{ color: "white" }}>0{id}</h1>
            </div>
            <div>
              <img src={img} alt="project_image" className="project_card_img" />
            </div>
          </Link>
        </div>
      </Tilt>
    </div>
  );
};
const MobileCard = ({ img, id, name, link }) => {
  return (
    <div className="mobile_card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          transition: true,
        }}
      >
        <div data-aos="flip-up" data-aos-easing="linear">
          <Link to={`/works/${link}`}>
            <div className="project_card_data">
              <h3 className="project_card_name">{name}</h3>
              <div className="project_card_border" />
              <h1 style={{ color: "gray" }}>0{id}</h1>
            </div>
            <div>
              <img src={img} alt="project_image" className="mobile_img" />
            </div>
          </Link>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [data, setData] = useState(projects);
  const [serchAPIData, setSearchAPIData] = useState(data);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(serchAPIData);
    } else {
      const filterRes = serchAPIData.filter((item) =>
        item.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterRes);
    }
  };

  return (
    <>
      {/* web */}

      <div className="work" id="work">
        <div className="work_vl_box">
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
        </div>

        <div className="work_box">
          <Fade left>
            <div id="web" />

            {/* Search Bar  */}
            <SearchBar handleFilter={handleFilter} />

            <p className="work_name">
              <div className="work_circle" />
              Work <span>{"/>"}</span>
            </p>
            <h2 className="work_h2">
              Selected web, mobile, video projects....
            </h2>
          </Fade>
          <div className="work_projects">
            {data.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                img={project.img}
                id={project.id}
                name={project.name}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* app */}
      <div className="work">
        <div className="work_vl_box">
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl_1" />
        </div>

        <div className="work_box">
          <Fade left>
            <div id="mobile" />
            <p className="work_name">
              <div className="work_circle" />
              APPS <span>{"/>"}</span>
            </p>
            <h2 className="work_h2">Check my mobile work projects....</h2>
          </Fade>
          <div className="work_projects">
            {mobile.map((project, index) => (
              <MobileCard key={project.name} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
