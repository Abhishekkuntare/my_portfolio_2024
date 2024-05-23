import React from "react";
import { BsArrowUp } from "react-icons/bs";
import toptodown from "../assets/toptodown.mp3";

const TopDown = () => {
  const handleSound = () => {
    new Audio(toptodown).play();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <a onClick={() => handleSound()}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          position: "fixed",
          right: 10,
          bottom: 10,
          zIndex: 10000,
        }}
      >
        {/* <BsArrowUp color="blue" width={100} height={100} /> */}
        <img
          width={"60px"}
          style={{ borderRadius: "10px" }}
          src="https://cdn.dribbble.com/users/1834114/screenshots/15066320/media/909583938aadaadad74a3f2361725ca6.png?resize=1000x750&vertical=center"
          alt=""
        />
      </div>
    </a>
  );
};

export default TopDown;
