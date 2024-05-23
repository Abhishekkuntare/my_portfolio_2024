import React, { useState } from "react";
import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import Fade from "react-reveal/Fade";
import ContactPopUp from "./ContactPopUp";

const Contact = () => {
  const [popUp, setPopUp] = useState(false);
  const handlePopUp = () => {
    setPopUp(!popUp);
    console.log(popUp);
  };
  return (
    <>
      <div className="contact" id="contact">
        <div>
          <div className="contact_box">
            <div className="contact_vl_box">
              <div className="contact_vl" />
              <div className="contact_vl" />
            </div>
            <div className="contact_h2_box">
              <Fade left>
                <div>
                  <h1 className="contact_h1">
                    <div className="contact_circle" />
                    Contact {"/>"}
                  </h1>
                </div>

                <h2 className="contact_h2">Find me on:</h2>
              </Fade>
              <Fade left cascade>
                <div className="contact_options">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
                      target="_blank"
                    >
                      <span className="contact_options_span">
                        <BsLinkedin color="#5918df" size={25} />
                        <h1>in/abhishekKuntare</h1>
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/abhishekkuntare/"
                      target="_blank"
                    >
                      <span className="contact_options_span">
                        <BsInstagram color="#5918df" size={25} />
                        <h1>@insta/abhishekkuntare</h1>
                      </span>
                    </a>
                    <a
                      href="https://github.com/Abhishekkuntare"
                      target="_blank"
                    >
                      <span className="contact_options_span">
                        <AiFillGithub color="#5918df" size={30} />
                        <h1>github.com/abhishekKuntare</h1>
                      </span>
                    </a>
                  </div>
                  <div>
                    <span className="contact_options_span">
                      <CgMail color="#5918df" size={35} />
                      <h1>abhishekkuntare7@gmail.com</h1>
                    </span>
                    <Fade left>
                      <a href="https://twitter.com/abhishekkuntare">
                        <span className="contact_options_span">
                          <AiOutlineTwitter color="#5918df" size={35} />
                          <h1>twitter/abhishekKuntare</h1>
                        </span>
                      </a>
                    </Fade>
                    <Fade left>
                      <a href="https://www.fiverr.com/pe/2LqmkN">
                        <span className="contact_options_span">
                          <SiFiverr color="#5918df" size={35} />
                          <h1>Fiverr/abhishekKuntare</h1>
                        </span>
                      </a>
                    </Fade>
                  </div>
                </div>
              </Fade>

              <div onClick={handlePopUp} className="btn">
                <button >Get in Touch</button>
              </div>
            </div>
          </div>
          <div>
            <p className="constact_footer">
              ©2023 Made with {"</>"}by Abhishek Kuntare All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {popUp && <ContactPopUp setPopUp={setPopUp} popUp={popUp} />}
    </>
  );
};

export default Contact;
