import React from "react";
import { Fade } from "react-reveal";
import { ImCross } from "react-icons/im";
const ContactPopUp = ({ setPopUp, popUp }) => {
  return (
    <Fade top>
      <div className="contact_pop_up">
        <span onClick={() => setPopUp(false)}>
          <ImCross />
        </span>
        <div className="contact_pop_up_main">
          <h1>Get in Touch!</h1>
          <div className="contact_pop_up_border" />
          <div className="contact_pop_up_form">
            <p>
              Hi,my name is <input type="text" placeholder="your name" /> and my
              email is <input type="email" placeholder="your email" />
            </p>
          </div>
          <div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ContactPopUp;
