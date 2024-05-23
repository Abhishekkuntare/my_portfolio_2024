import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Start from "../Start/Start";
import Work from "../Work/Work";
import Lab from "../Lab/Lab";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Start />
      <Work />
      <Lab />
      <About />

      <Contact />
    </div>
  );
};

export default Home;
