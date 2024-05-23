import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        style={{ cursor: "pointer" }}
        className="sidebar_inner"
        onClick={() => (window.location = "mailto:abhishekkuntare7@gmail.com")}
      >
        <img src={logo} alt="logo" />
        <h1>Hola</h1>
      </div>
    </div>
  );
};

export default Sidebar;
