import React, { useRef } from "react";
import "./Start.css";
import Typical from "react-typical";
import { motion } from "framer-motion";
import MyCV from "../../assets/Abhishek_Kuntare_Resume.pdf";
import downloadsound from "../../assets/download.mp3";

const Start = () => {
  const handleDownload = () => {
    new Audio(downloadsound).play();
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "Abhishek_Kuntare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ref = useRef(null);
  return (
    // <Fade bottom cascade>
    <motion.div ref={ref} id="start" className="start">
      <div>
        <div className="start_circle" />
        <div className="star_vl" />
      </div>
      {/* <Fade cascade> */}
      <div className="start_txt">
        <h3>Start {"/>"}</h3>
        <h3>Software Engineer(web,app,developer) </h3>
        <div>
          <motion.h1
            dragConstraints={ref}
            whileDrag={{ scale: 1.1 }}
            drag
            dragElastic={1}
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="start_intro"
          >
            Hi, my name is <span className="start_name">Abhishek Kuntare</span>{" "}
          </motion.h1>
          <h1 className="start_intro">
            i{" "}
            <span drag className="start_key1">
              design
            </span>{" "}
            and{" "}
            <motion.span drag className="start_key2">
              DeVelOP
            </motion.span>{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "webapps 💻",
                1000,
                "ui/ux 💅",
                1000,
                "mobile apps 🧑‍💻",
                1000,
                "websites",
                1000,
                "things",
                1000,
              ]}
            />
          </h1>

          <p className="start_para">Let me show You... </p>
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "pink",
              marginTop: "10px",
              transition: "width 0.3s", // Adding transition for smooth width change
              width: "200px", // Initial width
              boxShadow:
                "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
            }}
            onClick={() => {
              handleDownload();
            }}
            onMouseEnter={(e) => (e.target.style.width = "140px")} // Change width on hover
            onMouseLeave={(e) => (e.target.style.width = "200px")} // Revert back to initial width
          >
            Download CV
          </button>
        </div>
      </div>
      {/* </Fade> */}
    </motion.div>
    // </Fade>
  );
};

export default Start;
